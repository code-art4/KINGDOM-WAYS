import moment from "moment";
import { editBranchApi, getSingleBranchApi } from "../../api/branch.api";
import { createDonationApi, editDonationApi, getDonationApi, getSingleDonationApi } from "../../api/donate.api";
import { createStreamApi, editStreamApi, getLiveStreamApi, getLiveStreamsApi } from "../../api/livestream";
import { BranchDTO } from "../../dto/Branch.dto";
import DonateItemDTO, { DonationImageDTO, DonationItemDTO } from "../../dto/Donate.dto";
import { LiveStreamDTO } from "../../dto/LiveStream.dto";
import { statusEnum } from "../../enums/util.enum";
import { CRUDBL } from "../../interfaces/CRUDBL.interface";
import { BranchesModel, DonationsModel, LiveStreamData } from "../../testModel";
import { ISetDonation } from "../../ui/dashboard/admin/donation/edit";
import { ISetLivestream } from "../../ui/dashboard/admin/livestream/edit";
import { fakeModel, showAdminMessage,log } from "../../utils";

export class LiveStreamController implements CRUDBL {
    async create(data:LiveStreamDTO, branchId: string) {
        try {
            if (!data.title || !data.description) {
                showAdminMessage("error", "Please fill all fields.");
                return;
            }
            
            if (fakeModel) {
                // console.log(UserData);
                // setItems(UserData);
                showAdminMessage("success", "Stream Created");
            }
            else {
                createStreamApi(data, parseInt(branchId)).then((response) => {
                    log("earlydev",response);
                    if (response.code >= statusEnum.ok) {
                        showAdminMessage("success", "Stream Creation was successful");
                        
                    }
                    else {
                        showAdminMessage("error", "Stream Creation failed");
                    }
                });
                showAdminMessage("success", "Stream Creation request Sent");
            }
        }
        catch(e) {
            log("earlydev", e);
        }
    }
    async read(set: ISetLivestream, id: number) {
        if (fakeModel) {
            const data = LiveStreamData[id];
            set.setDescription(data.description);
            set.setTitle(data.title);
            set.setUrl(data.liveStreamUrl);
            set.setBranch(BranchesModel[0].id);
            set.setStreamDate(moment(data.dateOfStream).format("yyyy-MM-DD"));
        }
        else {
            const response = await getLiveStreamApi(id);
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:LiveStreamDTO = response.data;
            
            set.setDescription(data.description);
            set.setUrl(data.liveStreamUrl);
            set.setTitle(data.title);
            set.setStreamDate(moment(data.dateOfStream).format("yyyy-MM-DD"));
            // set.setBranch(data);
        }
    }
    async update(data:LiveStreamDTO, id: number) {
        if (fakeModel) {
            showAdminMessage("success", "Stream update was successful");
        }
        else {
            // data.donationImages.forEach(x => delete x.id)
            
            editStreamApi(data, id).then((response) => {
                log("earlydev", "1",response);
                if (response.code >= statusEnum.ok) {
                    showAdminMessage("success", "Stream update was successful");
                    
                }
                else {
                    showAdminMessage("error", "Stream update failed");
                }
            });
            showAdminMessage("success", "Stream update request Sent");
        }
    }
    async delete() {

    }
    async bulk() {
        
    }
    async list(setItems: Function) {
        if (fakeModel) {
            setItems(LiveStreamData);
        }
        else {
            const response = await getLiveStreamsApi();
            if (response.code < statusEnum.ok) {
                showAdminMessage("error", response.message.toString());
            }
    
            const data:LiveStreamDTO[] = response.data;
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