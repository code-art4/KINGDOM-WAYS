import Layout from "../layout";
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
                withSideBar={false}                
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