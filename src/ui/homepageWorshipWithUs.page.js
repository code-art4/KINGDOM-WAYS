import Head from 'next/head'
import Image from 'next/image'


export default function HomePageWorshipWithUs() {
  return (
    <section 
    className="d-flex flex-column justify-content-around  pt-5 dark-grey homepage-worship-us">
        <div  className="d-flex flex-column align-items-center">
            <h1 className="">Worship with us today</h1>
            <div className="dark-purple-text-color">
                Choose a branch closest to you
            </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
            <div
                className="homepage-locations-box"
            >
                <div 
                    className="homepage-locations-box-topimg homepage-locations-box-first"
                ></div>
                <div className="bg-white p-4">
                    <h3>Sundays</h3>
                    <div className="font-bold">
                        Sundays 8:30am • 10:00am • 11:45am
                    </div>
                    <div>
                        24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos
                    </div>
                </div>
            </div>
            <div
                className="homepage-locations-box"
            >
                <div 
                    className="homepage-locations-box-topimg homepage-locations-box-second"
                ></div>
                <div className="bg-white p-4">
                    <h3>Sundays</h3>
                    <div className ="font-bold">
                        Sundays 8:30am • 10:00am • 11:45am
                    </div>
                    <div>
                        24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road ,Abuja
                    </div>
                </div>
            </div>
            <div
                className="homepage-locations-box"
            >
                <div 
                    className="homepage-locations-box-topimg homepage-locations-box-third"
                ></div>
                <div className="bg-white p-4">
                    <h3>Sundays</h3>
                    <div className="font-bold">
                        Sundays 8:30am • 10:00am • 11:45am
                    </div>
                    <div>
                        24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road ,Aba
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
