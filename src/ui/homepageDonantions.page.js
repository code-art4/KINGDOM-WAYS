import Head from 'next/head'
import Image from 'next/image'


export default function HomePageDonations() {
  return (
    <section 
    className="d-flex justify-content-around bg-white box-shadow w-100 homepage-donations">
        <div 
            className="col d-flex align-items-center homepage-donate-children"
        >
           <div className="row">
                <div className="col-md-1 text-white">
                    1
                </div>
                <div className="col-md-10 w-80"></div>
                <div className="col-md-1 text-white">
                    3
                </div>
           </div>
        </div>
        <div 
            className="col pl-20vh"
        >
            <div
                className="d-flex purple-text align-items-end homepage-donate-intro-text"
            >
                Join the community of givers today
            </div>
            <div
                className="homepage-donate-sub-text"
            >
                Make a Donation
            </div>
            <div>
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. 
            </div>
            <div className="row mt-3">
                <div
                    className="col-md-3 border border-white bg-black text-white d-flex align-items-center rounded homepage-donate-donate-parent"
                >
                    <img 
                        src="/assets/images/heart(1) 1donor-hand.png" 
                        className="homepage-donate-icon" 
                    />
                    <span className="ml-10px">
                        Donate
                    </span>
                </div>
                <div 
                    className="col-md-3 border border-black d-flex align-items-center justify-content-center rounded h-8vh"
                >
                    Read More
                </div>
            </div>
        </div>
    </section>
  )
}
