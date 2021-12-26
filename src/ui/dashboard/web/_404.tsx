import Layout from "./layout";
import Head from 'next/head';

export default function Web404() {
    return (
        <>
            <Layout
            title="Well, we are lost."
            withFooter={true}
            navbar={"web"}
            externalStyles={["/styles/css/donation.css"]}
            >
                <div className="main_container d-flex flex-column justify-content-center">
                    <section className="col">
                        {/* <!-- <img className="hero-banner-area" src="images/hero-banner.png" alt="Hero Banner Image"> --> */}
                        <div className="banner_content">
                            <p className="italic_txt"></p>
                            <h1>Well, we are lost.</h1>
                            <h4>Requested page could not found. Please try again later.</h4>
                            <p className="banner_text"></p>
                            <a href={"/web/"} className="button">Go to Homepage</a>
                        </div>
                    </section>
                </div>
                
            </Layout>
        </>
    );
}