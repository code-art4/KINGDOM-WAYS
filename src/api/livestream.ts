import {
   Request,
   showMessage,
   getMessage,
   getRequest,
   saltConst,
} from "../utils"
import { urls } from "../urls";
import { LoginAccessDTO, LoginDTO } from "../dto/login.dto";
import { apiStringStatus } from "./apiStatus.enum";
import { HashlidEncoDecode } from "../encodeDecode";
import { ResponseDTO } from "../dto/response.dto";
import { statusEnum } from "../enums/util.enum";
import { DonationItemDTO } from "../dto/Donate.dto";
import { BranchDTO, BranchItemDTO } from "../dto/Branch.dto";
import { LiveStreamDTO } from "../dto/LiveStream.dto";

export async function getLiveStreamsApi(): Promise<ResponseDTO> {
   const response = new ResponseDTO();
   
   try {
      let res = await getRequest(urls.baseUrl, urls.liveStream);
      // const hashlidEncoDecode: HashlidEncoDecode = new HashlidEncoDecode(saltConst);
      let data:LiveStreamDTO[];
      if (res.status) {

         //save user profile info
         data = res.data.data;
         
         // localStorage.setItem("userData", hashlidEncoDecode.encode(JSON.stringify(userData)));
         response.data = data;
      }
      showMessage(getMessage(res), res.status, localStorage);
      
      response.code = statusEnum.ok;
   }
   catch(e) {
      response.message = e.toString();
   }
   
   return response.getResponse();
}

export async function postLiveStreamApi(id: number): Promise<ResponseDTO> {
   const response = new ResponseDTO();
   return response.getResponse();
   
   try {
      let res = await getRequest(urls.baseUrl, urls.liveStream + "/?branchId=" + id);
      //alert(JSON.stringify(res));
      // const hashlidEncoDecode: HashlidEncoDecode = new HashlidEncoDecode(saltConst);
      let data: LiveStreamDTO;
      if (res.status) {

         
         //save user profile info
         data = res.data;
         
         // localStorage.setItem("userData", hashlidEncoDecode.encode(JSON.stringify(userData)));
         response.data = data;
      }
      
      showMessage(getMessage(res), res.status, localStorage);
      response.code = statusEnum.ok;
   }
   catch(e) {
      response.message = e.toString();
   }
   
   return response.getResponse();
}