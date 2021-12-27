import Layout from "../layout";
import NavBar from "../navbar";
import Head from 'next/head'
import HomePageFooter from "../footer";
import { fakeModel } from "../../../../utils";
import ShopFilter from "./Banner";
import ShopContent from "./Content";
import ShopRightSection from "./RightSection";
import ShopLeftSection from "./LeftSection";

export default function Payments() {
    
    return (
        <>
            <Layout 
                externalStyles={["/styles/css/style.css"]}
                navbar={"web"}
                title={"Shop"}
                withFooter={true}
            >
                <div className="shop">
                    <div className="shopNow">Shop Now</div>
                    <div className="row">
                        {/* <ShopFilter />
                        <ShopContent /> */}
                        
                        <ShopRightSection />
                        <ShopLeftSection />
                    </div>
                    
                </div>
            </Layout>
        </>
    );
}