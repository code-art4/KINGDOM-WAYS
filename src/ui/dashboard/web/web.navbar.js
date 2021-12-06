import Head from 'next/head'
import Image from 'next/image'
const DH = require('./../../../../public/assets/images/heart(1) 1donor-hand.png');



export default function WebNavBar() {
  return (
    <section 
    className="d-flex justify-content-around box-shadow w-100 navbar-bg">
      <div 
        className="col-sm-12 col-md-12 col-md-10 d-flex bd-highlight height-100px" 
        >
          <div className="p-2 d-flex flex-fill bd-highlight flex-row">
              <div className="col-md-4">
                <span className="nav-links">
                    <img
                        className="homepage-nav-image"  
                        src="/assets/images/KWLC Logo 1.png" 
                    />
                </span>
              </div>
              <div className="col-md-8 p-4">
                <span className="nav-links">Home</span>
                <span className="nav-links">Pages</span>
                <span className="nav-links">Donations</span>
                <span className="nav-links">Events</span>
                <span className="nav-links">Blog</span>
                <span className="nav-links">Shop</span>
                <span className="nav-links flex-row">
                    <span>
                        <img className="homepage-nav-text-image" src="/assets/images/shopping-cart 1 (1).png" />
                    </span>
                    <span>
                        <img className="homepage-nav-text-image"  src="/assets/images/Info (1).png" />
                    </span>
                </span>
              </div>
          </div>
      </div>
    </section>
  )
}
