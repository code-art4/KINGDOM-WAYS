import Head from 'next/head'
import Image from 'next/image'
import {LinkProps} from 'next/link'
// import styles from './../../styles/Home.module.css'


export default function Slider() {
  return (
      <section 
        className="d-flex flex-column homepage-slider-section"
        name="intro"
      >   
            <div className="col-sm-12 col-md-12 col-md-10 d-flex bd-highlight text-white border-bottom border-white height-50px" >
                <div className="col-md-10 p-2 flex-fill bd-highlight">
                    <span>Follow us</span>
                    <span >
                        <img 
                            className="homepage-nav-text-image" 
                            src="assets/images/linkedin iconlinkedin.png" 
                        />
                    </span>
                    <span>
                        <img 
                            className="homepage-nav-text-image" 
                            src="assets/images/Grouptwitter.png" 
                        />
                    </span>
                    <span>
                        <img 
                            className="homepage-nav-text-image" 
                            src="assets/images/Groupfacebook.png" 
                        />
                    </span>
                    <span>
                        <img 
                            className="homepage-nav-text-image" 
                            src="assets/images/Groupinstagram.png" 
                        />
                    </span>
                </div>
                <div className="col-md-2 p-2 flex-fill bd-highlight">
                    <span>Call us: 234704332832</span>
                </div>
            </div>
            <div 
            className="col-sm-12 col-md-12 col-md-10 d-flex bd-highlight text-white height-50px" 
            >
                <div className="p-2 flex-fill bd-highlight flex-row">
                    <span className="nav-links border-white border homepage-donate">
                        <img
                            className="homepage-nav-text-image"  
                            src="assets/images/heart(1) 1donor-hand.png" 
                        />
                        Donate
                    </span>
                    <span className="nav-links"><a href="">Home</a></span>
                    <span className="nav-links"><a href="">Pages</a></span>
                    <span className="nav-links"><a href="/web/donations">Donations</a></span>
                    <span className="nav-links">
                        <img
                            className="homepage-nav-image"  
                            src="assets/images/KWLC Logo 1.png" 
                        />
                    </span>
                    <span className="nav-links"><a href="">Events</a></span>
                    <span className="nav-links"><a href="">Blog</a></span>
                    <span className="nav-links"><a>Shop</a></span>
                    <span className="nav-links flex-row">
                        <span>
                            <img className="homepage-nav-text-image" src="assets/images/shopping-cart 1.png" />
                        </span>
                        <span>
                            <img className="homepage-nav-text-image"  src="assets/images/magnifying-glass 1.png" />
                        </span>
                        <span>
                            <img className="homepage-nav-text-image"  src="assets/images/Info.png" />
                        </span>
                      </span>
                </div>
            </div>
            <div className="d-flex flex-row p-5 text-white pt-5 mt-5" >
                <div className="flex-sm-grow-1 p-5 border-bottom border-white height-30px" >
                    1
                </div>
                <div className="d-flex flex-lg-grow-1 p-5 flex-column justify-content-center text-white">
                    <span className="homepage-title-text full-width-center-text">
                        Living Faith Church
                    </span>
                    <h1 className="full-width-center-text homepage-lg-text">
                        Join the prayer today
                    </h1>
                    <span className="full-width-center-text homepage-title-text">
                        Visit Your local church and become a part of ------ flock by contributing to the community in anyway you can possible can
                    </span>
                    <button 
                    className="d-flex align-self-center justify-content-center homepage-seemore-btn">
                        See More
                    </button>
                    <span className="d-flex align-self-center justify-content-center homepage-scrollimg">
                        <img
                                className="homepage-nav-text-image h-100px scrollimg"  
                                src="assets/images/Group 2.png" 
                            />
                    </span>
                </div>
                <div className="flex-sm-grow-1 p-5 border-bottom border-white height-30px">
                    3
                </div>
            </div>
    </section>
  )
}
