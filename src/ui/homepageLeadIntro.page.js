import Head from 'next/head'
import Image from 'next/image'


export default function HomePageLeadIntro() {
  return (
    <section 
        className="d-flex flex-row justify-content-around pt-5 bg-white pb-5 homepage-lead-intro">
        <div className="col-md-1"></div>
        <div className="col col-md-5 ml-5 d-flex flex-column">
            <img className="homepage-service-pastor" src="assets/images/ken 1.png" />
            <img className="homepage-service-pastor-sign" src="assets/images/ksign 1.png" />
            <span className="homepage-lead-pastor-text">Lead pastor</span>
        </div>
        <div className="col col-md-5">
            <h1>You're Welcome</h1>
            <span className="homepage-description-text wrap-text">
                Hello people,

                My Name is Ken MBACHI, the lead pastor in kingdom ways living church international. It’s my humble pleasure to welcome you to our world.

                In Matthew, Jesus said to peter fear not just follow me and I will make you… One major assignment of Jesus Christ through His church is the Making of great destinies.

                It's my pleasure to personally invite you to follow us in any of our live services, social media platforms and you will see what Jesus Christ through His word will make out of your life. Please enjoy your time in our world and feel very free to use any of our contact points in case you need any information or clarity about us.
                
                Welcome! I celebrate you. 
            </span>
        </div>
        <div className="col-md-1"></div>
    </section>
    )
}
