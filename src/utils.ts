import moment from "moment";
import { loginApi } from "./api/auth.api";
import { LoginAccessDTO, LoginDTO, LoginModelDTO } from "./dto/login.dto";
import { CryptoEncodeDecode, HashlidEncoDecode } from "./encodeDecode";
import { statusEnum } from "./enums/util.enum";
import { urls } from "./urls";

export const fakeModel = false;
export const saltConst = "saltConst-KWLC-saltConst-KWLC";

export function getParam(name: any): string {
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(window.location.search))
        return decodeURIComponent(name[1]);
}

export function mmFormat(datetime: string, format: string = "hh:mm a"): string{
    
    return moment(datetime).format(format);
}

export async function checkUserLoggedIn(): Promise<Boolean> {
    const data: LoginAccessDTO = localStorage.getItem("userData");
    if (data === null) {
       //user is logged in
       const response = await Login({username, password});
       return true;
    }
    else if (data != null) {
        // check expiry date

    }
    else {
        return false;
    }
}

function PrepareData(Data, type = "json") {
    if (type == "json") {
       return JSON.stringify(Data)
    } else if (type == "multipart") {
       const formData = new FormData()
       Object.keys(Data).forEach((e) => {
          formData.append(e, Data[e])
       })
       return formData
    }
}

export function getMessage(result) {
    let message = ""
 
    if (Object.keys(result).indexOf("message") != -1) {
       message = result.message
    } else if (Object.keys(result).indexOf("Message") != -1) {
       message = result.Message
    } else {
       if (result.status != undefined && result.status) {
          //message = GENERIC_OK
          message = "Ok.";
       } else {
          //message = AN_ERROR_OCCURRED
          message = "An error occurred";
       }
    }
 
    return message
 }

export async function showMessage(param1, parm2, param3) {

}

export async function Request(
    Base,
    Url,
    Data,
    PreparedData = false,
    method = "POST",
    token = undefined
 ) {
    
 
    let headers = {}
    headers["Content-Type"] = "application/json"
    headers["Access-Control-Allow-Origin"] = "*"
    headers["Allow-header"] = "*";
    
    
    token = await getToken();
    
    if (token != "") {
        token = "Bearer " + token;
        headers["Authorization"] = token;
    }
    else {
      //  await Login({username, password});
    }

    console.log("headers: " + headers);

 
    const fetchOptions =
       method.toUpperCase() === "POST"
          ? {
               method: method,
               headers: headers,
               body: !PreparedData ? PrepareData(Data) : Data,
            }
          : {
               method: method,
               headers: headers,
            }
    return fetch(Base + Url, fetchOptions)
       .then((response) => {
          console.log("1st", JSON.stringify(response), Base + Url)
          return response.json()
       })
       .then((data) => {
          let keys = Object.keys(data)
          if (keys.indexOf("statusCode") != -1) {
             // error occured
             if (
                getMessage(data) ==
                "Unauthorized Access. You are using an expired token"
             ) {
                //log user out, token expired, re-login needed
                Logout({username: username, password: password});
             }
             data.status = false
          } else {
             data.status = true
          }
 
          return data
          //return PrepareResult(data, '');
       })
       .catch((error) => {
          return { status: false, message: error.message }
          // return PrepareResult({}, error, true);
       })
 }

 export async function getRequest(Base, Url, token = undefined, method="GET") {
    console.log("base", Base, " url", Url)
    let headers = {
       Accept: "application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*",
    }
    
    token = await getToken();

   if (token != "") {
      token = "Bearer " + token;
      headers["Authorization"] = token;
   }
   else {
      // await Login({username, password});
   }

    console.log("headers: ", headers);
 
    return fetch(Base + Url, {
       method: method,
       headers: headers,
    })
       .then((response) => {
          console.log("1st", JSON.stringify(response), Base + Url)
          return response.json()
       })
       .then((data) => {
          console.log("2nd", JSON.stringify(data), Base + Url)
 
          let keys = Object.keys(data)
          if (keys.indexOf("statusCode") != -1) {
             // error occured
             if (
                getMessage(data) ==
                "Unauthorized Access. You are using an expired token"
             ) {
                //log user out, token expired, re-login needed
                Logout({username: username, password: password});
             }
             data.status = false
          } else {
             data.status = true
          }
 
          return data
       })
       .catch((error) => {
          console.log(JSON.stringify(error))
          return { status: false, message: error.message }
       })
}

let username: string = "";
let password: string = "";
let hashlidEncoDecode: HashlidEncoDecode;
let cryptoEncodeDecode: CryptoEncodeDecode;
let localStorage;


export const removeFromLocalStorage = (key: string) => {
   localStorage.removeItem(key);
}

export const writeToLocalStorage = (key: string, data: string) => {
   removeFromLocalStorage(key);
   if (cryptoEncodeDecode != null ) {
      localStorage.setItem(key, cryptoEncodeDecode.encode(JSON.stringify(data)));
   }
}

export const getFromLocalStorage = (key: string) => {
   
   if (cryptoEncodeDecode != null) {
      const rawData = localStorage.getItem((key));
      if (rawData != null) {
         return cryptoEncodeDecode.decode(rawData);
      }
   }
}

export const Logout = async ({username, password}) => {
    localStorage.clear();
    await Login({ username, password});
}

export const Login = async ({username, password}) => {
   return;
   const loginData:string = getFromLocalStorage("userData");
   let loginInfo;
   
   if (loginData != "" && (loginData != null || loginData != undefined)) {
      let loginObject = JSON.parse(loginData);
      if (typeof loginObject == 'string') {
         loginObject = JSON.parse(loginObject);
      }
      
      console.log("isExpired", moment(new Date()).isAfter(moment(loginObject.expiryDate)), new Date(), loginObject.expiryDate, typeof loginObject);
      if (moment(new Date()).isAfter(moment(loginObject.expiryDate))) {
         // return;
      }
      console.log("makeing api i");
      //expired make new call
   }
   console.log("makeing api ii");
   
   //make api call
   loginInfo = await loginApi(new LoginModelDTO({ username, password}));
   if (loginInfo.code <= statusEnum.failed) {

   }
   else {
      writeToLocalStorage("userData", (JSON.stringify(loginInfo.data)));
   }
   return;
}

const getToken = async (): Promise<string> => {
   //EXpDate: 2022-01-12T02:02:57Z 
   let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb2xseSIsImp0aSI6ImYzNDFiYjU5LTcxYTItNDYyNS1hMzQ2LTM4YTQ2YjZiYWNhNSIsImVtYWlsIjoibm9sbHkxOTBAZ21haWwuY29tIiwiVXNlcklkIjoiMSIsImV4cCI6MTY0Mjc0MDkzNSwiaXNzIjoiS3dsYyIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.x8mJPXnghawyQ4GcDxVZMfMRfcbVSUBJoIx63T3N5Ao";
    return token;
    
    let rawData: string = getFromLocalStorage("userData");
    
    if (rawData) {
      
      const result:any = JSON.parse(JSON.parse(rawData));
        
      const markerSymbolInfo = result as LoginAccessDTO;
  
      token = markerSymbolInfo.token;
    }
   //  const result = eval(JSON.parse(rawData));
    return token;
}

export const initApp = (
    userData: LoginModelDTO, 
    hashids: HashlidEncoDecode,
    localStorageObj: any,
    _cryptoEncodeDecode: CryptoEncodeDecode,
    ) => {
    if (!fakeModel)  {
      username = userData.username;
      password = userData.password;
      hashlidEncoDecode = hashids;
      localStorage = localStorageObj;
      cryptoEncodeDecode = _cryptoEncodeDecode;
      Login({username, password});
    }
    else {

    }
}