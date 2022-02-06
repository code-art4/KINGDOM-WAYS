export default class ShopItemInformationDTO {
    public constructor(init?: Partial<ShopItemInformationDTO>){
        Object.assign(this, init);
    }
    key: string;
    value: string;

}