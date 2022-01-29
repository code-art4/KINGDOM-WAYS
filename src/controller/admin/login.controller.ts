import { loginApi } from "../../api/auth.api";
import { ResponseDTO } from "../../dto/response.dto";
import { statusEnum } from "../../enums/util.enum";
import { fakeModel, showAdminMessage, showMessage, writeToLocalStorage } from "../../utils";

export async function loginUser(username: string, password: string){
    const response = new ResponseDTO();
    try {
        if (!username || !password) {
            showAdminMessage("error","Please provide username and password");
            return;
        }

        if (fakeModel) {
            showAdminMessage("success","login ok");
            setTimeout(() => {
                window.location.href = "/admin/";
            }, 1500);
        }
        else {
            const result = await loginApi({username, password});
            if (result.code < statusEnum.ok) {
                response.code = result.code;
                response.extra_data = result.extra_data;
            }
            else {
                response.code = statusEnum.successful;
                showAdminMessage("success","login ok");
                writeToLocalStorage("userData", (JSON.stringify(result.data)));
                setTimeout(() => {
                    window.location.href = "/admin/";
                }, 1500);
            }
        }
    }
    catch(e) {
        console.log(e);
        response.extra_data = e.toString();
    }
}