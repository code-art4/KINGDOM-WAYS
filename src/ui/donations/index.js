import Head from 'next/head'
import Image from 'next/image'
import OfflinePayments from '../../components/payment-card-info/offlinePayments.component'
import SimpleCardInfo from '../../components/simple-card-info'
import WebDashboard from '../dashboard/web/web.dashboard'


export default function Donations() {
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
            <div className="d-flex flex-row w-100 mb-5">
                <div className="d-flex w-50 align-self-start font-bold f-30px">Latest Donation</div>
                <div className="d-flex  w-50 justify-content-end">
                    <img src="/assets/images/Group 45.png" className={"h-20px w-20px"} />
                </div>
            </div>
            <div className="d-flex flex-row mb-5">
                <div className="border-bottom w-100px h-50px p-30px mr-100px font-bold">
                    1
                </div>
                <div className="col-md-10 d-flex flex-row">
                    <SimpleCardInfo 
                        description={"Card Desccription. Lorem Ipsum"} 
                    />
                    <SimpleCardInfo 
                        title={"Card Desccription"} 
                        img={"/assets/images/pexels-sander-dalhuisen.png"} 
                    />
                </div>
                <div className="border-bottom w-100px h-50px p-30px font-bold">
                    3
                </div>
            </div>
        </section>
    </WebDashboard>
  )
}
