import moment from "moment";
import { createBranchApi, editBranchApi, getBranchesApi, getSingleBranchApi } from "../../api/branch.api";
import { getAllUsersApi, registerUser } from "../../api/user.api";
import { BranchDTO, BranchServiceDTO } from "../../dto/Branch.dto";
import UserDTO from "../../dto/User.dto";
import { statusEnum } from "../../enums/util.enum";
import { CRUDBL } from "../../interfaces/CRUDBL.interface";
import { BranchesModel, UserData } from "../../testModel";
import { ISetBranch } from "../../ui/dashboard/admin/branch/edit";
import { fakeModel, showAdminMessage,log, showConfirmDialog } from "../../utils";

export class BranchController implements CRUDBL {
    async create(data:BranchDTO) {
        if (!data.name || !data.city || !data.state || !data.location || data.services.length == 0) {
            showAdminMessage("error", "Please fill all fields and provide a service time.");
            return;
        }
        
        if (fakeModel) {
            // console.log(UserData);
            // setItems(UserData);
            showAdminMessage("success", "Branch Created");
        }
        else {
            createBranchApi(data).then((response) => {
                log("earlydev",response);
                if (response.code >= statusEnum.ok) {
                    showAdminMessage("success", "Branch Creation was successful");
                    
                }
                else {
                    showAdminMessage("error", "Branch Creation failed");
                }
            });
            showAdminMessage("success", "Branch Creation request Sent");
        }
    }
    async read(setState: ISetBranch, id: number) {
        if (fakeModel) {
            const data = BranchesModel[id];
            setState.setItem(data);
            setState.setTitle(data.title);
            setState.setLocation(data.location);
        }
        else {
            const response = await getSingleBranchApi(id);
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:BranchDTO = response.data;
            setState.setItem(data);
            setState.setTitle(data.name);
            setState.setLocation(data.location);
            setState.setCity(data.city);
            setState.setIsBranchHq(data.isBranchHq);
            setState.setServices(data.services);
            setState.setState(data.state);
            setState.setStreet(data.street);
        }
    }
    async update(data:BranchDTO, id: number) {
        if (fakeModel) {
            showAdminMessage("success", "Branch update was successful");
        }
        else {
            data.services.forEach(x => delete x.id)
            
            editBranchApi(id, data).then((response) => {
                log("earlydev", "1",response);
                if (response.code >= statusEnum.ok) {
                    showAdminMessage("success", "Branch update was successful");
                    
                }
                else {
                    showAdminMessage("error", "Branch update failed");
                }
            });
            showAdminMessage("success", "Branch update request Sent");
        }
    }
    async delete() {

    }
    async bulk() {
        
    }
    async list(setItems: Function) {
        if (fakeModel) {
            setItems(BranchesModel);
        }
        else {
            const response = await getBranchesApi();
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:BranchDTO[] = response.data;
            setItems(data);
        }
    }

    addService(setServices: Function, services:BranchServiceDTO[], day: string, time: string) {
        setServices(services.concat([new BranchServiceDTO(
            {
                day: day, 
                time: time, 
                id: parseInt(moment(new Date()).format('yyyyMMDDHHmmss')),
            })]));
    }

    removeService(setServices: Function, services:BranchServiceDTO[], id: number) {
        const result = showConfirmDialog("Remove this item?");
        if (result) {
            setServices(services.filter((x, i) => x.id != id));
        }
    }
}