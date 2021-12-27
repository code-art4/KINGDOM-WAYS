import { ShopItemsModel } from "../testModel"
import { fakeModel } from "../utils"

export const initShopTopItems = (setTopItems: Function) => {
    if (fakeModel) {
        setTopItems(ShopItemsModel.slice(0,3));
    }
    else {

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