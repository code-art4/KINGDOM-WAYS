import React,{ useState, useEffect } from "react";
import ShopTopProductItem from "../../../../components/shop-top-product";
import { initShopTopItems } from "../../../../controller/shop.controller";
import ShopItemDTO from "../../../../dto/ShopItem.dto";

export default function ShopRightSection () {
    const emptyTopItems: ShopItemDTO[] = [];
    
    const [topItems, setTopItems] = useState(emptyTopItems);

    useEffect(() => {
        initShopTopItems(setTopItems);
    }, []);

    return (
        <>
            <div className="column right">
                <form action="" className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search Item" />
                </form>

                <h3>FILTER BY PRICE</h3>
                <div className="line_filter">
                    <input
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    className="slider"
                    id="myRange"
                    onChange={(e) => {
                        console.log(e.target);
                    }}
                    />
                </div>
                <div className="filter">
                    <button className="button">Filter</button>
                    <div className="filterValue">Price <span >N0- N50</span></div>
                </div>

                <h3>TOP PRODUCTS</h3>
                {
                    topItems.length > 0 ? topItems.map(x => {
                        return (
                            <ShopTopProductItem 
                                copies={x.copies}
                                href={"/web/product?id=" + x.id}
                                img={x.img}
                                price={x.price}
                                title={x.title}
                                key={x.id}
                            />
                        );
                    })
                    : undefined
                }
        </div>
        </>
    );
}