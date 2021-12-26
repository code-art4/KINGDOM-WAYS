import Layout from "../layout";
import DonateBanner from "./Banner";
import DonateContent from "./Content";
import BranchContent from "./Content";

export default function Donate() {
    return (
        <Layout
            externalStyles={["/styles/css/donation.css"]}
            navbar={"web"}
            title="Donate"
            withFooter={true}
        >
            <div className="donate">
                <DonateBanner />
                <DonateContent />
                {/* <BranchContent /> */}
            </div>
        </Layout>
    );
}