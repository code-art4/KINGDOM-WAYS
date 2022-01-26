import React, {useEffect} from 'react';
import DonateBtn from '../../../../components/donate-btn';

export default function AltHomePageHeader() {
    
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
                <nav className="nav_bar nav_alt">
                    {/* <!------<a href="#" className="nav_logo"><img src="images/KWLClogo.svg" alt="KWLC Logo"></a>---------> */}

                    {/* <!----------Navigation Links---------> */}
                    <div className="nav_menu" id="nav-menu">
                        <ul className="nav_list nav-list">
                            <li className="nav_item">
                                {/* <a href="indexDonate.html" className="nav_link"><button className="btn"> <i className="fa fa-gift" aria-hidden="true"></i>Donate</button></a> */}
                                <DonateBtn />
                            </li>
                            <li className="nav_item">
                                <a href={"/web/"} className="nav_link">Home</a></li>
                            <li className="nav_item">
                                <a href={"/web/payment"} className="nav_link">Payment</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/donations"} className="nav_link">Donations</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/"} className="nav_link">
                                    <img src="/images/KWLClogo.svg" alt="KWLC Logo"/>
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/events"} className="nav_link">Events</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/404"} className="nav_link">Blog</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/shop"} className="nav_link">Shop</a>
                            </li>
                            {/* <!-------Dropdown menu-------> */}
                            <div className="dropdown">
                                <div className="nav_tog">
                                    <div className="bar b1" id="bar1"></div>
                                    <div className="bar b2" id="bar2"></div>
                                    <div className="bar b3" id="bar3"></div>
                                </div>
                                <ul className="dropdown_contents">
                                    <li className="dropdown_menu"><a href={"/web/404/"}className="nav_link">About us</a></li>
                                    <li className="dropdown_menu">
                                        <a href="#" className="nav_link">Our Team</a></li>
                                    <li className="dropdown_menu"><a href={"/web/branches"} className="nav_link">Branches</a></li>
                                </ul>
                            </div>
                            <li className="nav_item"><a href="search" className="nav_link txt_white"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                            <li className="nav_item"><a href="checkout.html" className="nav_link"><i className="icofont-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    {/* <!---------Menu bars--------> */}
                    <div className="nav_toggle" onClick={() => onClickMenu()} id="nav-toggle">
                        <div className="bar b1" id="bar1"></div>
                        <div className="bar b2" id="bar2"></div>
                        <div className="bar b3" id="bar3"></div>
                    </div>
                </nav>
            </header>
    );
}