import React, {useEffect, useState} from 'react';
import DonateBtn from "../../../../components/donate-btn";
import { fakeModel, getParam } from "../../../../utils";
import { DonationsModel } from "../../../../testModel";
import DonateItemDTO from '../../../../dto/Donate.dto';


export default  function DonateContent() {
    const [item, setItem] = useState(new DonateItemDTO());
    
    useEffect(() => {
        const id: string = getParam("id");
        if (!id) {
            window.location.href = "/web/";
        }
        else {
            if (fakeModel) {
                const donateItem = DonationsModel.filter(x => x.id.toString() == id);
                if (donateItem.length > 0) {
                    setItem(donateItem[0]);
                }
                else {}
            }
            else {}
        }
    }, []);
    
    const latestDonations: DonateItemDTO[] = DonationsModel;

    return (
        <>
            <section className="content">
                <div className="row">
                    <div className="col image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="col main-content">
                        <h3>{!fakeModel ? undefined :  item.title}</h3>
                        <p>
                            {!fakeModel ? undefined :  item.description}
                        </p>
                        <div className="btn-container">
                            <DonateBtn />
                            <DonateBtn 
                                label="Share" 
                            />
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
                                item.images.length > 0 ? item.images.map((x,index) => {
                                    return (<img key={index} src={x} alt="" />);
                                })
                                : undefined
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
            (latestDonations.length > 0 ? latestDonations.reverse().slice(0, 2).map((x, index) => {
                return (
                    <DonantionItem 
                        key={index}
                        img={x.image} 
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