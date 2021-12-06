import Head from 'next/head'
import Image from 'next/image'


export default function HomePageJoinUs() {
  return (
    <section  className="d-flex flex-column justify-content-around bg-white homepage-join-us">
        <div className="d-flex align-self-center font-bold f-25px" >
            Join the family
        </div>
        <div className="row p-30px" >
            <div className="col-md-4">
                <img src="/assets/images/gabriella-clare-marino.png" 
                className="homepage-join-us-first-row-img" />
            </div>
            <div className="col-md-4">
                <div className="homepage-join-us-intro-text">
                    Fellowship with us in any of our branches 
                </div>
                <div className="purple-border homepage-join-us-learn-more" >
                    learn more
                </div>
            </div>
            <div className="col-md-4 bg-white" >
                <img src="/assets/images/blob (2) 1.png" className="homepage-join-us-first-row-img" />
            </div>
        </div>
        <div className="row p-30px">
            <div className="col bg-white" >
                <img src="/assets/images/blob (2) 2.png" className="homepage-join-us-first-row-img" />
            </div>
            <div className="col">
                <img src="/assets/images/sixteen-miles-out.png" className="homepage-join-us-first-row-img" />
            </div>
            <div className="col">
                <div className="homepage-join-us-intro-text">
                    JOIN OUR BIBLE CLASSES TODAY
                </div>
                <div className="purple-border homepage-join-us-learn-more" >
                    learn more
                </div>
            </div>
            
        </div>
    </section>
  )
}
