import Head from 'next/head'
import Image from 'next/image'


export default function HomePageLiveService() {
  return (
      <section 
    className="d-flex flex-row justify-content-around pt-3 light-grey homepage-liveservice-section"
    >   
        <div className="flex-column align-items-start w-50 ml-100px">
            <div>
                Our next live service would be on 
            </div>
            <div className="font-bold">
                thursday 20th October
            </div>
        </div>
        <div className="d-flex w-25 ">
            <div className="d-flex justify-content-center flex-row ">
                <span className="homepage-time-label">Time: </span>
                <span className="homepage-time-box">
                    09
                </span>
                <span className="homepage-time-label">:</span>
                <span className="homepage-time-box">
                    00
                </span>
                <span className="homepage-time-label">
                    AM
                </span>
            </div>
        </div>
        
        <div className="d-flex w-25">
            <div className="d-flex justify-content-center flex-row ">
                <span className="homepage-time-label">Date: </span>
                <span className="homepage-time-box">
                    20
                </span>
                <span className="homepage-time-label">/</span>
                <span className="homepage-time-box">
                    10
                </span>
                <span className="homepage-time-label">/</span>
                <span className="homepage-time-box">
                    21
                </span>
            </div>
        </div>
    </section>
  )
}
