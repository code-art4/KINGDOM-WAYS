import Head from 'next/head'
import Image from 'next/image'
import DonateBtn from '../../components/donate-btn'
import OfflinePayments from '../../components/payment-card-info/offlinePayments.component'
import SimpleCardInfo from '../../components/simple-card-info'
import WebDashboard from '../dashboard/web/web.dashboard'


export default function Donate(props) {
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
            <div className="d-flex mb-5">
                <div className="w-80 p-30px mr-100px">
                    <div className="font-bold mb-4">
                        PAY FOR YOUR TITHE AND OFFERINGS EASILY
                    </div>
                    <div className="mb-4 d-flex justify-content-around flex-row">
                        <div className="d-flex flex-row">
                            <div>
                                Select Action
                            </div>
                            <select className="ml-10px">
                                <option>
                                    Offering
                                </option>
                            </select>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                Payment Option
                            </div>
                            <select className="ml-10px">
                                <option>
                                    offline
                                </option>
                            </select>
                        </div>
                    </div>  
                    
                    <div className="mb-4 d-flex justify-content-around flex-row">
                        <div className="mb-4 d-flex flex-column">
                            <label>
                                Email
                            </label>
                            <input placeholder="Email" />
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <span className="mr-5px">Amount</span>                            
                                <input placeholder="Email" />
                            </div>
                            <DonateBtn 
                                className={"d-flex w-50 mt-10px justify-content-center text-white border-white mr-50px align-self-center"}
                                href={"/web/donation-detail"}
                                label={"Pay"} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </WebDashboard>
  )
}
