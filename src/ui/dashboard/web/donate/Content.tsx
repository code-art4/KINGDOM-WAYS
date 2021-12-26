import DonateBtn from "../../../../components/donate-btn";
import { fakeModel } from "../../../../utils";

export default  function DonateContent() {
    const testData = 
        {
            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
            images: [
                "/images/project-1.jpg",
                "/images/project-2.jpg",
                "/images/project-2.jpg",
                "/images/project-1.jpg",
            ],
            title: "Kingdom ways (ikeja)",
            latestDonations: [
                {
                    img: "/images/build-church-schools.jpg",
                    title:"Build church school", 
                    target: "23,000,000",
                    raised: "130,000"
                },
                {
                    img: "/images/build-church-schools.jpg",
                    title:"Build church school", 
                    target: "23,000,000",
                    raised: "130,000"
                },
            ]
        };
    
    return (
        <>
            <section className="content">
                <div className="row">
                    <div className="col image">
                        <img src="/images/church-building-large.jpg" alt="" />
                    </div>
                    <div className="col main-content">
                        <h3>{!fakeModel ? undefined :  testData.title}</h3>
                        <p>
                            {!fakeModel ? undefined :  testData.description}
                        </p>
                        <div className="btn-container">
                            <DonateBtn />
                            {/* <button id="donate">
                                <img src="/images/donate-icon.svg" alt="" /> 
                                Donate
                            </button> */}
                            <DonateBtn label="Share" />
                            {/* <button>Share</button> */}
                        </div>
                    </div>
                </div>
                <div className="project_container">
                    <h4>Pictures from the project</h4>
                    <div className="project row">
                        {
                            !fakeModel 
                            ? 
                                undefined 
                            :  
                                testData.images.map((x,index) => {
                                    return (<img key={index} src={x} alt="" />);
                                })
                        }
                    </div>
                </div>
            </section>
            <section>
        <h3>LATEST DONATION</h3>
        <div className="row justify-space-between latest-donation">
            {!fakeModel ? 
                undefined 
            :  
            (testData.latestDonations.length > 0 ? testData.latestDonations.reverse().slice(0, 2).map((x, index) => {
                return (
                    <DonantionItem 
                        key={index}
                        img={x.img} 
                        title={x.title} 
                        target={x.target} 
                        raised={x.raised}                
                    />
                )
            }) : undefined )}
        </div>
    </section>
        </>
    );
}

const DonantionItem = ({img, title, target, raised}) => {
    return (
        <div className="col row">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="project-content">
                <h5>{title}</h5>
                <div className="row">
                    <h6>Target:</h6>
                    <span>N {target}</span>
                </div>

                <div className="row">
                    <h6>Raised:</h6>
                    <span>N {raised}</span>
                </div>
            </div>
        </div>
    );
}