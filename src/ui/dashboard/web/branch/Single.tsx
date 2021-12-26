import React , {useState, useEffect} from 'react';
import { BranchItemDTO } from '../../../../dto/Branch.dto';
import { BranchesModel } from '../../../../testModel';
import { fakeModel, getParam, mmFormat } from '../../../../utils';
import Layout from "../layout";

const SingleBranch = () => {
    const [itemId, setItemId] = useState([]);
    const [item, setItem] = useState(new BranchItemDTO());

    useEffect(() => {
        const idParam = getParam("id");
        if (!idParam) {
            window.location.href = "/web/";
        }
        else {
            if (fakeModel) {
                const item = BranchesModel.filter(x => x.id.toString() == idParam);
                if (item.length > 0) {
                    setItem(item[0]);
                    console.log(item[0]);
                }else {}
            }
        }
    }, []);
    
    return (
        <Layout
            externalStyles={["/styles/css/donation.css"]}
            navbar={"web"}
            title="Church Branches"
            withFooter={true}
        >
            <div className="eachBranch">
                <div className="hero-banner-area">
                    <img src={item.image} alt="" />
                    <div className="hero-banner-area-text">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            
                <section className="hero-content" style={{marginBottom: "2rem"}}>
                    <h3>You're Welcome {item.title}</h3>

                    <div className="row w-100">
                        <div className="col">
                            <div className="profile">
                                <div className="image">
                                    <img src="/images/profile.jpg" alt="" srcset="" />
                                </div>
                                <div className="profile-info">
                                    <h5>{item.leadPastor}</h5>
                                    <p>Lead pastor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col shadow profile-content">
                            <span>
                                Hello people, 
                            </span>
                            <span>
                                My Name is {item.leadPastor}, the lead pastor in kingdom ways living church international. It’s my humble pleasure to welcome you to our world.
                            </span>
                            <span>
                                {item.favVerse}
                            </span>
                            <span>
                                Welcome! I celebrate you.
                            </span>
                        </div>
                    </div>

                    <div className="row w-100 flex-column-sm mt-4">

                        <div className="col card first-card">
                            <div className="image">
                                <img src="images/list-icon-1.svg" alt="" srcset="" />
                            </div>
                            <p>
                                {item.location}
                            </p>
                        </div>

                        <div className="col w-50">
                            <div className="card row w-100 align-center justify-start cards">
                                <div className="image">
                                    <img src="/images/list-icon-2.svg" alt="" srcset="" />
                                </div>
                                <span>
                                    <p className="inline">{`${item.timers[0]&& mmFormat(item.timers[0])}-${item.timers[1] && mmFormat(item.timers[1])}`}
                                        <ul className="inline">
                                            <li>{`${item.timers[2] && mmFormat(item.timers[2])}-${mmFormat(item.timers[3]) && mmFormat(item.timers[3])}`}</li>
                                        </ul>
                                    </p>
                                </span>
                            </div>

                            <div className="card row w-100 align-center justify-start cards">
                                <div className="image">
                                    <img src="/images/list-icon-3.svg" alt="" srcset="" />
                                </div>

                                <span>
                                    <p className="inline">{item.phoneNo && item.phoneNo[0]}
                                        <ul className="inline">
                                            <li>
                                            {item.phoneNo && item.phoneNo[1]}
                                            </li>
                                        </ul>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100">
                    <div className="image map">
                        <img src="/images/maps.jpeg" alt="" srcset="" />
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default SingleBranch;