import { getShopItemsApi } from "../api/shop.api";
import { ResponseDTO } from "../dto/response.dto";
import ShopItemDTO, { ShopDTO } from "../dto/ShopItem.dto";
import { statusEnum } from "../enums/util.enum";
import { ShopItemsModel } from "../testModel"
import { fakeModel } from "../utils"

export const initShopTopItems = (setTopItems: Function) => {
    if (fakeModel) {
        setTopItems(ShopItemsModel.slice(0,3));
    }
    else {

    }
}

export const initShopLeftItems = async (setTopItems: Function) => {
    if (fakeModel) {
        setTopItems(ShopItemsModel.slice(0,3));
    }
    else 
    {
        const response: ResponseDTO = await getShopItemsApi();
        if (response.code < statusEnum.ok) {
            throw new Error(response.extra_data.toString());
        }

        const data:ShopDTO[] = response.data;
        const _data:ShopItemDTO[] = [];
        data && data.length > 0 && data.map(x => {
            _data.push(new ShopItemDTO({
                copies: x.quantity,
                description: x.description,
                id: x.id,
                price: x.price,
                title: x.title,
                img: (x.productImages.length > 0 ? x.productImages[0].imageUrl : ""),
                images: (x.productImages.length > 0 ? x.productImages.map(x => x.imageUrl) : []),
                information: [
                    {
                        key: "weight",
                        value: "10kg",
                    },
                    {
                        key: "dimension",
                        value: "2.2",
                    }
                ]

        }));

        //remove on deploy or demo
        data && data.length > 0 && data.reverse().map(x => {
            _data.push(new ShopItemDTO({
                copies: x.quantity,
                description: x.description,
                id: x.id,
                price: x.price,
                title: x.title,
                img: (x.productImages.length > 0 ? x.productImages[0].imageUrl : ""),
                images: (x.productImages.length > 0 ? x.productImages.map(x => x.imageUrl) : []),
                information: [
                    {
                        key: "weight",
                        value: "10kg",
                    },
                    {
                        key: "dimension",
                        value: "2.2",
                    }
                ],
            }));
        });
        
});
    }  
}  

export const shopRelatedItems = (setTopItems: Function) => {
    if (fakeModel) {
        setTopItems(ShopItemsModel.slice(0,3));
    }
    else {

    }
}


export const shopLoadItem = (setItem: Function, id: string) => {
    if (fakeModel) {
        const product = ShopItemsModel.filter(x => x.id.toString() == id);
        if (product.length > 0) {
            setItem(product[0]);
        }
    }
    else {

    }
}

export function shopOpenTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }