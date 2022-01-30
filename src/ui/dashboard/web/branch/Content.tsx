import React, {useState, useEffect} from 'react';
import BranchItem from "../../../../components/branch-item";
import { loadBranchData } from '../../../../controller/branch.controller';

export default  function BranchContent() {
    const [items, setItems] = useState([]);
    console.log("items i", items);
    useEffect(() => {
        loadBranchData(setItems, items);
    },[]);
    
    return (
        <>  
            <section className="search_wrapper">
                <h3 className="section_subtitle">City</h3>

                <div className="location_search">
                    <input className="event_searcher" type="search" name="search" id="search" />
                    <a href="#" className="button">Search</a>
                </div>
                <span className="grey_text">
                    <p>Search for branches near you </p>
                </span>
            </section>
            <section className="locate_wrapper">
                <h2>
                   <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                </h2>
                <hr />
            </section>
            <section className="branch_wrapper">
                <span><h5>Branches in Lagos</h5></span>

                <div className="branch_box">
                    {
                        (items && items.length > 0 ? items.map((x, index) => {
                            return (
                                <BranchItem 
                                    key={index}
                                    description={x.description}
                                    onClick={() => {
                                        window.location.href = "/web/branch?id=" + x.id;
                                    }}
                                    timers={x.timers}
                                    title={x.title}
                                />
                            );
                        }) : undefined)
                    } 
                </div>
                
            </section>
        </>
    );
}