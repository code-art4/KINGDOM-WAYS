import Head from 'next/head'
import Image from 'next/image'


export default function HomePageFooter() {
  return (
    <section 
    className="d-flex flex-column justify-content-around  dark-grey h-80vh" >
        <div className="d-flex flex-row pl-5vh">
            <div className="col" style={{marginRight: "20px"}}>
                <div className="d-flex flex-row mb-3">
                    <img src="/assets/images/KWLC Logo 1.png" className="homepage-footer-logo" />
                    <span className="homepage-footer-logo-subtext">
                        Kingdom Ways Living Church
                    </span>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2">
                        <img src="/assets/images/phone-call 1.png" className="homepage-footer-call-icon"  />
                        <span className="ml-5">
                            + 234 70 433 2832
                        </span>
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <img src="/assets/images/direction 1.png" 
                        className="homepage-footer-direction" />
                        <span className="ml-5">
                            24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos
                        </span>
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <img src="/assets/images/email 1.png" className="homepage-footer-email-icon" />
                        <span className="ml-5">
                            info@kwlchq.org
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="col ml_40px">
                <div className="d-flex flex-row">
                    <span className="homepage-footer-contactus-text">
                        CONTACT US  
                    </span>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2">
                        <input placeholder="Name" className="light-ash border-0"  />
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <input placeholder="Email" className="light-ash  border-0" />
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <textarea placeholder="Message" rows="3" cols="20" className="light-ash border-0"></textarea>
                    </div>
                    <div className="purple-border mt-3 bg-black text-white rounded homepage-footer-send-icon">
                        Send
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="d-flex flex-row">
                    <span className="homepage-footer-upcoming-event">
                        UPCOMING EVENT
                    </span>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2 bold">
                        Weeding
                    </div>
                    <div className="d-flex flex-row mt-2 dark-green-text">
                        July 7 @ 8:00 am - 10:30 am
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2 bold">
                        Weeding
                    </div>
                    <div className="d-flex flex-row mt-2 dark-green-text">
                        July 7 @ 8:00 am - 10:30 am
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2 bold">
                        Weeding
                    </div>
                    <div className="d-flex flex-row mt-2 dark-green-text">
                        July 7 @ 8:00 am - 10:30 am
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-row">
                    <span className="homepage-footer-upcoming-event">
                        FOLLOW US
                    </span>
                </div>
                <span >
                    <img 
                        className="homepage-nav-text-image" 
                        src="/assets/images/linkedin-black icon.png" 
                    />
                </span>
                <span>
                    <img 
                        className="homepage-nav-text-image" 
                        src="/assets/images/twitter-black.png" 
                    />
                </span>
                <span>
                    <img 
                        className="homepage-nav-text-image" 
                        src="/assets/images/fb-black.png" 
                    />
                </span>
                <span>
                    <img 
                        className="homepage-nav-text-image" 
                        src="/assets/images/insta-black.png" 
                    />
                </span>

            </div>
        </div>
    </section>
  )
}
