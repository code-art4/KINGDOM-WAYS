import moment from "moment";
import { editBranchApi, getSingleBranchApi } from "../../api/branch.api";
import { createDonationApi, editDonationApi, getDonationApi, getSingleDonationApi } from "../../api/donate.api";
import { BranchDTO } from "../../dto/Branch.dto";
import DonateItemDTO, { DonationImageDTO, DonationItemDTO } from "../../dto/Donate.dto";
import { statusEnum } from "../../enums/util.enum";
import { CRUDBL } from "../../interfaces/CRUDBL.interface";
import { DonationsModel } from "../../testModel";
import { ISetDonation } from "../../ui/dashboard/admin/donation/edit";
import { fakeModel, showAdminMessage,log } from "../../utils";

export class DonationController implements CRUDBL {
    async create(data:DonationItemDTO, branchId: string) {
        try {
            if (!data.title || data.donationImages.length < 1) {
                showAdminMessage("error", "Please fill all fields and provide a service time.");
                return;
            }
            
            if (fakeModel) {
                // console.log(UserData);
                // setItems(UserData);
                showAdminMessage("success", "Donation Created");
            }
            else {
                data.donationImages.forEach(x => delete x.id);
                createDonationApi(data, parseInt(branchId)).then((response) => {
                    log("earlydev",response);
                    if (response.code >= statusEnum.ok) {
                        showAdminMessage("success", "Donation Creation was successful");
                        
                    }
                    else {
                        showAdminMessage("error", "Donation Creation failed");
                    }
                });
                showAdminMessage("success", "Donation Creation request Sent");
            }
        }
        catch(e) {
            log("earlydev", e);
        }
    }
    async read(set: ISetDonation, id: number) {
        if (fakeModel) {
            const data = DonationsModel[id];
            set.setDescription(data.description);
            set.setDonationImgs(data.images);
            set.setSummary(data.description);
            set.setTitle(data.title);
        }
        else {
            const response = await getSingleDonationApi(id);
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:DonationItemDTO = response.data;
            
            set.setDescription(data.description);
            set.setDonationImgs(data.donationImages);
            set.setSummary(data.summary);
            set.setTitle(data.title);
        }
    }
    async update(data:DonationItemDTO, id: number) {
        if (fakeModel) {
            showAdminMessage("success", "Donation update was successful");
        }
        else {
            // data.donationImages.forEach(x => delete x.id)
            
            editDonationApi(id, data).then((response) => {
                log("earlydev", "1",response);
                if (response.code >= statusEnum.ok) {
                    showAdminMessage("success", "Donation update was successful");
                    
                }
                else {
                    showAdminMessage("error", "Donation update failed");
                }
            });
            showAdminMessage("success", "Donation update request Sent");
        }
    }
    async delete() {

    }
    async bulk() {
        
    }
    async list(setItems: Function) {
        if (fakeModel) {
            setItems(DonationsModel);
        }
        else {
            const response = await getDonationApi();
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:DonateItemDTO[] = response.data;
            setItems(data);
        }
    }

    addDonationImage(setImages: Function, images: DonationImageDTO[], image: string, isMainImage: boolean) {
        setImages(images.concat([{
            imageUrl: image, 
            isMainImage: isMainImage,
            id: parseInt(moment(new Date()).format('yyyyMMDDHHmmss')),
        }]));
    }
    makeMainImage(setImages: Function, images: DonationImageDTO[], id: number) {
        images.forEach(x => {
            if (x.id == id) {
                x.isMainImage = true;
            }
            else {
                x.isMainImage = false;
            }
        });
        setImages(Array.from(images));
    }
}