import Layout from "../layout";
import NavBar from "../navbar";
import EventFinder from "./eventFinder";
import Head from 'next/head'
import EventList from "./list";
import { SingleEventItem } from "../../../../components/event-item";
import HomePageFooter from "../footer";
import { fakeModel } from "../../../../utils";

export default function Events() {
    const testData: SingleEventItem[] = [
        {
            bgImage:"/images/pexels-luis.png",
            location:"24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos",
            subText:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
            locationTitle:"Kingdom Ways Living Church",
            title:"Youth Empowerment Program",
            startDatetime:new Date(),
            endDatetime:new Date(), 
            datetimeCurrentRange: new Date(),
        },
        {
            bgImage:"/images/pexels-luis.png",
            location:"24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos",
            subText:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
            locationTitle:"Kingdom Ways Living Church",
            title:"Youth Empowerment Program",
            startDatetime:new Date(),
            endDatetime:new Date(), 
            datetimeCurrentRange: new Date(),
        }
    ];
    const prodData = [];
    
    return (
        <>
            <Layout 
                externalStyles={["/styles/css/events.css", "/styles/css/style.css"]}
                navbar={"web"}
                title={"Events"}
                withFooter={false}
            >
                <div className="main_container">
                    <EventFinder datetime={new Date()} />
                    <EventList 
                        datetimeCurrentRange={new Date()}
                        list={!fakeModel ? prodData : testData}
                        />
                </div>
                <HomePageFooter />
            </Layout>
        </>
    );
}