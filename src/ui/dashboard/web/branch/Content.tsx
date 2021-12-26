import BranchItem from "../../../../components/branch-item";
import { fakeModel } from "../../../../utils";

export default  function BranchContent() {
    const testData = [
        {
            description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
            timers: [
                new Date(),
                new Date(),
                new Date(),
                new Date(),
            ],
            title: "Kingdom ways (ikeja)",
        },
        {
            description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
            timers: [
                new Date(),
                new Date(),
                new Date(),
                new Date(),
            ],
            title: "Kingdom ways (Lekki)",
        },
        {
            description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
            timers: [
                new Date(),
                new Date(),
                new Date(),
                new Date(),
            ],
            title: "Kingdom ways (Aja)",
        },


        
    ];
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
                            onClick={(e) => {e.preventDefault(); console.log(e)}}
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