import Head from 'next/head'
import Image from 'next/image'
import DonateBtn from '../../components/donate-btn'
import OfflinePayments from '../../components/payment-card-info/offlinePayments.component'
import SimpleCardInfo from '../../components/simple-card-info'
import WebDashboard from '../dashboard/web/web.dashboard'


export default function DonationDetail(props) {
  return (
      <WebDashboard>
        <section 
        className="d-flex justify-content-around bg-white box-shadow w-100 donations-intro">
            <div 
                className="col d-flex align-items-center donate-intro-img justify-content-center text-white f-30px font-bold"
            >
                <div className="plr-20P text-center">
                    “A gift opens the way and ushers the giver into the presence of the great.”
                </div>
            </div>
        </section>
        <section 
        className="d-flex flex-column justify-content-around bg-white w-100 homepage-donations p-5">
            <div className="d-flex flex-row mb-5">
                <div className="w-50 p-30px mr-100px font-bold donate-detail-img"
                >
                    <img src="/assets/images/pexels-sander-dalhuisen.png" className={"w-100 h-80vh"} />
                </div>
                <div className="w-50 p-30px mr-100px">
                    <div className="font-bold mb-4">
                        Church building project 
                    </div>
                    <div className="mb-4">
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.

                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="d-flex">
                        <DonateBtn 
                            className={"w-45 justify-content-center text-white border-white mr-50px"}
                            href={"/web/donation-detail"}
                        />
                        <DonateBtn 
                            className={"w-45 p-1 justify-content-center bg-white border border-black text-black ml-50px"} 
                            label={"Send"} 
                            noIcon={true} 
                            href={"/web/donation-detail"}
                        />
                    </div>
                </div>
            </div>
        </section>
    </WebDashboard>
  )
}
