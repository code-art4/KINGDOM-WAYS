import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import DonateBtn from "./../../../../components/donate-btn";

// import styles from './../../styles/Home.module.css'


export default function Header() {

  useEffect(() => {
    autoCloseDrawer();
  }, []);

  const autoCloseDrawer = (toggleId='nav-toggle',navId='nav-menu') => {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
    nav.classList.toggle('show-menu');
  }
  
  const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
    
    if(toggle && nav){
        nav.classList.toggle('show-menu');
    }
  }

  const onClickMenu = () => {
    showMenu('nav-toggle','nav-menu');
    document.getElementById("nav-toggle").classList.toggle("change");
  }
  
  return (
        <header className="header_wrap" id="header">
            <div className="top_navbar">
                <div className="top_right">
                    <p>Follow us
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </p>
                </div>
                <div className="top_left">
                    <p>Call us: +234 70 433 2832</p>
                </div>
            </div>
            <hr/>
            {/* <!-- navigation menu --> */}
            <nav className="nav_bar">
                <a href="#" className="nav_logo">
                  <img src="/images/KWLClogo.svg" alt="KWLC Logo"/>
                </a>
                {/* <!----------Navigation Links---------> */}
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                          <DonateBtn />
                        </li>
                        <li className="nav_item"><a href="" className="nav_link">Home</a></li>
                        <li className="nav_item"><a href={"/web/404"} className="nav_link">Pages</a></li>
                        <li className="nav_item"><a href={"/web/donate"} className="nav_link">Donations</a></li>
                        <li className="nav_item">
                          {/* <a href="#" className="nav_logo">
                            <img src="assets/images/KWLC Logo 1.png" className="" alt="KWLC Logo"/>
                          </a> */}
                          <div className="nav_logo">
                            <img src="/images/KWLCLogo.svg" alt="KWLC Logo"/></div>
                        </li>
                        <li className="nav_item"><a href={"/web/events"} className="nav_link">Events</a></li>
                        <li className="nav_item"><a href={"/web/404"} className="nav_link">Blog</a></li>
                        <li className="nav_item"><a href={"/web/404"} className="nav_link">Shop</a></li>
                        <li className="nav_item">
                          <a href="cart.html" className="nav_link">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="nav_item"><a href="cart.html" className="nav_link"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        <div className="nav_item">
                            <div className="dropdown">
                                <div className="nav_tog">
                                    <div className="bar b1" id="bar1"></div>
                                    <div className="bar b2" id="bar2"></div>
                                    <div className="bar b3" id="bar3"></div>
                                </div>
                                <input className="drop_input" id="toggle" type="checkbox" checked />
                                <ul className="dropdown_contents">
                                    <li className="dropdown_menu"><a href="about.html" className="nav_link">About us</a></li>
                                    <li className="dropdown_menu"><a href="#" className="nav_link">Our Team</a></li>
                                    <li className="dropdown_menu"><a href="#" className="nav_link">Our Beliefs</a></li>
                                    <li className="dropdown_menu"><a href="#" className="nav_link">Our Community</a></li>
                                    <li className="dropdown_menu"><a href="#" className="nav_link">Branches</a></li>
                                    <li className="dropdown_menu"><a href="#" className="nav_link">Payment page</a></li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* <!-------Menu bars--------> */}
                <div className="nav_toggle" onClick={() => {onClickMenu()}} id="nav-toggle" >
                    <div className="bar b1" id="bar1"></div>
                    <div className="bar b2" id="bar2"></div>
                    <div className="bar b3" id="bar3"></div>
                </div>
            </nav>
        </header>
  );
}
