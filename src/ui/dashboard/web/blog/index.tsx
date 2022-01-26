import Layout from "../layout";
import BlogBanner from "./Banner";
import BlogContent from "./Content";
import BlogNavigation from "./Navigation";

export default function WebBlog(){
    return (
        <Layout
            externalStyles={["/styles/css/style.css"]}
            navbar={"web"}
            title="Church Blog"
            withFooter={true}
        >
            <BlogBanner />
            <div className="main_container">
                <BlogContent />
            </div>
            <BlogNavigation />
        </Layout>
    );
}