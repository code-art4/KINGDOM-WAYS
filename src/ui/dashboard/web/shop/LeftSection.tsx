import React,{ useState, useEffect } from "react";
import ShopItem from "../../../../components/shop-item";
import { initShopLeftItems } from "../../../../controller/shop.controller";
import ShopItemDTO from "../../../../dto/ShopItem.dto";
import { ShopItemsModel } from "../../../../testModel";
import { fakeModel } from "../../../../utils";

export default function ShopLeftSection() {
    const emptyTopItems: ShopItemDTO[] = [];
    
    const [items, setItems] = useState(emptyTopItems);

    useEffect(() => {
        initShopLeftItems(setItems);
    }, []);
    
    return (
        <div className="column left">
          <div className="setSearch">
            <div className="result">Showing 1/9 of 15 results</div>
            <div className="default">Default Sorting</div>
          </div>
          <div className="products">
              {
                  (items.length > 0 ?
                    items.map(x => {
                        return (
                            <ShopItem 
                                key={x.id}
                                img={x.img}
                                price={x.price}
                                title={x.title}
                                href={"/web/product?id=" + x.id}
                            />
                        )
                    })
                    : undefined)
              }
          </div>

          <div className="pages_button">
            <a href="#" className="next"><h5>Next Page</h5></a>
        </div>
        </div>
    );
}