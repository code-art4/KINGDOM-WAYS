import ListMenuIcon from "../../../../components/list-menu-icon";
import { DonationsModel } from "../../../../testModel";
import { fakeModel } from "../../../../utils";
import Layout from "../layout";

export default function DonationIntro () {
    return (
        <>
        <Layout
            externalStyles={["/styles/css/donation.css"]}
            navbar={"web"}
            title="Donate"
            withFooter={true}
        >
            <div className="hero-banner-area">
                <img src="/images/donation-hero-banner.png" alt="" />
                <div className="hero-banner-area-text">
                    <h2>“A gift opens the way and ushers the giver into the presence of the great.”</h2>
                    <span>Proverbs 18:16 </span>
                </div>
            </div>
            <section className="content">
        <nav>
            <h3>LATEST DONATION</h3>
            <ListMenuIcon 
                onClick={() => console.log("eeee")} 
            />
            {/* <!-- Navigation --> */}
            {/* <div className="list-icon">
                <div className="list-icon-container">
                    <div className="list-icon-rectangle"></div>
                    <div className="list-icon-circle"></div>
                </div>
                <div className="list-icon-container">
                    <div className="list-icon-rectangle"></div>
                    <div className="list-icon-circle"></div>
                </div>
                <div className="list-icon-container">
                    <div className="list-icon-rectangle"></div>
                    <div className="list-icon-circle"></div>
                </div>
            </div> */}
        </nav>

        <div className="content-container row">
            {
                !fakeModel ? undefined : (
                    DonationsModel.length > 0 ?
                        DonationsModel.slice(0,2).map((x, index) => {
                            return (
                                <RenderDonationItem 
                                    key={index}
                                    img={x.image} 
                                    title={x.title} 
                                    description={x.description.substring(0, 100)}
                                    href={`/web/donate?id=${x.id}`}
                                />
                            );
                        })
                    : undefined
                )
            }

            
        </div>
    </section>
        </Layout>
        </>
    );
}

const RenderDonationItem = ({img, title, description, href}) => {
    return (
        <div className="col">
            <div className="image">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="main-content">
                <h5>{title}</h5>
                <p>
                    {description}...
                </p>
                <a href={href} className="btn">See more</a>
            </div>
        </div>
    );
}