import ShopItemInformationDTO from "./ShopItemInfo.dto";

export default class ShopItemDTO {
    img: string;
    title: string;
    id: number;
    price: number;
    copies: number;
    images: string[] = [];
    description: string;
    information: ShopItemInformationDTO[] = [];
}

