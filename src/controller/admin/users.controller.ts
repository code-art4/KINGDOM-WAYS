import { getAllUsersApi, getUserApi, registerUser } from "../../api/user.api";
import UserDTO from "../../dto/User.dto";
import { statusEnum } from "../../enums/util.enum";
import { CRUDBL } from "../../interfaces/CRUDBL.interface";
import { UserData } from "../../testModel";
import { ISetUser } from "../../ui/dashboard/admin/user/editUser";
import { fakeModel, showAdminMessage,log } from "../../utils";

export class UserController implements CRUDBL {
    async create(data:UserDTO) {
        if (!data.emailAddress || !data.firstName || !data.lastName || !data.address) {
            showAdminMessage("error", "Please fill all fields");
            return;
        }
        
        if (fakeModel) {
            // console.log(UserData);
            // setItems(UserData);
            showAdminMessage("success", "User Created");
        }
        else {
            registerUser(data).then((response) => {
                log("earlydev",response);
                if (response.code >= statusEnum.ok) {
                    showAdminMessage("success", "User Creation was successful");
                    
                }
                else {
                    showAdminMessage("error", "User Creation failed");
                }
            });
            showAdminMessage("success", "User Creation request Sent");
        }
    }
    async read(set:ISetUser, id: number) {
        if (fakeModel) {
            const data = UserData[id];
            set.setAddress(data.address);
            set.setEmail(data.email);
            set.setFirstname(data.firstName);
            set.setLastName(data.lastName);
        }
        else {
            const response = await getUserApi(id);
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:UserDTO = response.data;
            
            set.setAddress(data.address);
            set.setEmail(data.email);
            set.setFirstname(data.firstName);
            set.setLastName(data.lastName);
        }
    }
    async update(data:UserDTO, id: number) {
        
    }
    async delete() {

    }
    async bulk() {
        
    }
    async list(setItems: Function) {
        if (fakeModel) {
            console.log(UserData);
            setItems(UserData);
        }
        else {
            const response = await getAllUsersApi();
            if (response.code < statusEnum.ok) {
                throw new Error(response.extra_data.toString());
            }
    
            const data:UserDTO[] = response.data;
            log("earlydev", data);
            setItems(data);
        }
    }
}

// export default async function getAllUsers(setItems:Function) {
//     if (fakeModel) {
//         console.log(UserData);
//         setItems(UserData);
//     }
//     else {
//         const response = await getAllUsersApi();
//         if (response.code < statusEnum.ok) {
//             throw new Error(response.extra_data.toString());
//         }

//         const data:UserDTO[] = response.data;
//         setItems(data);
//     }
// }


// export async function addUser(setItems:Function) {
//     if (fakeModel) {
//         console.log(UserData);
//         setItems(UserData);
//     }
//     else {
//         const response = await getAllUsersApi();
//         if (response.code < statusEnum.ok) {
//             throw new Error(response.extra_data.toString());
//         }

//         const data:UserDTO[] = response.data;
//         setItems(data);
//     }
// }