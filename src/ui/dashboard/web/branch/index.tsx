import Layout from "../layout";
import BranchBanner from "./Banner";
import BranchContent from "./Content";

export default function Branches() {
    return (
        <Layout
            externalStyles={["/styles/css/donation.css"]}
            navbar={"web"}
            title="Church Branches"
            withFooter={true}
        >
            <div className="branch">
                <BranchBanner />
                <BranchContent />
            </div>
        </Layout>
    );
}