import BranchItem from "../../../../components/branch-item";
import { BranchesModel } from "../../../../testModel";
import { fakeModel } from "../../../../utils";

export default  function BranchContent() {
    const testData = BranchesModel;
    
    return (
        <>
            <section className="hero-content">
                <h3>City</h3>
                <form action="">
                    <div className="row">
                        <input type="text" name="location" id="location" placeholder="Lagos" />
                        <button type="submit">Search</button>
                    </div>
                    <p>Search for branches near you</p>
                </form>
            </section>
            <section className="content">
                <div className="row align-center">
                    <div className="image">
                        <img src="/images/spot-pin.jpg" alt="" />
                    </div>
                    <h3>Lagos</h3>
                </div>
                <p className="blue-color">Branches in lagos</p>
                <div className="row flex-wrap location">
                    {
                        !fakeModel 
                        ?
                            undefined 
                        : (testData && testData.length > 0 ? testData.map((x, index) => {
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