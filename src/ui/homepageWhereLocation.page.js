/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'


export default function HomePageWhereLocation() {
  return (
    <section 
        className="d-flex flex-column justify-content-around sky-blue box-shadow box-shadow-light-grey homepage-where-location">
        <div className="row">
            <div className="col p-30vh">
                <div className="d-flex justify-content-start purple-text" >where to find us</div>
                <div className="d-flex justify-content-start f-30px">WHERE'S YOUR LOCATION?</div>
                <img src="/assets/images/bg-locations.png" className="homepage-where-location-img"/>
                <div className="purple-text ">
                    <span className="bg-white homepage-where-location-directions">
                    <img src="/assets/images/direction 1.png" className="homepage-where-location-sub-text" />
                    Get Directions
                    </span>
                </div>
            </div>
            <div className="col ml-10vh-">
                <img 
                    src="/assets/images/akira-hojo.png" 
                    className="homepage-where-location-hq"
                />
                <div 
                    className="d-flex justify-content-start f-28px"
                >
                    Kingdom Ways Living Church Headquarters
                </div>
                <div
                className="d-flex justify-content-start f-16px"
                >
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="d-flex flex-row mt-2">
                    <img src="/assets/images/phone-call 1.png" className="homepage-where-location-icons" />
                    <span className="ml-5">
                        + 234 70 433 2832
                    </span>
                </div>
                <div className="d-flex flex-row mt-2">
                    <img src="/assets/images/direction 1.png" className="homepage-where-location-icons" />
                    <span className="ml-5">
                        24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos
                    </span>
                </div>
                <div className="d-flex flex-row mt-2">
                    <img src="/assets/images/email 1.png" className="homepage-where-location-icons" />
                    <span className="ml-5">
                        info@kwlchq.org
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}
