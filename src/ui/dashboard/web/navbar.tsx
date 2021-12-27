import React, { useRef } from "react";

export default function NavBar() {
    let hamburgerMenuRef = useRef(false);
    const showMenu =(toggleId, navId) => {
        const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
        
        if(toggle && nav){
            nav.classList.toggle('show-menu');
        }
      }
    
      const onClickMenu = () => {
        showMenu('nav-toggle','nav-menu');
        document.getElementById("nav-toggle").classList.toggle("change");
      }

      const handleClickOutside = (e: any)  => {
        console.log(e);
        console.log(hamburgerMenuRef);
        
        if (hamburgerMenuRef) {
            alert('You clicked outside of me!');
        }
    }

    return (
        <header className="header_wrap" id="header">
                    {/* <!-- navigation menu --> */}
                <nav className="nav_bar">
                    <a href="#" className="nav_logo"><img src="/images/KWLClogo.svg" alt="KWLC Logo"/></a>

                    {/* <!----------Navigation Links---------> */}
                    <div className="nav_menu" id="nav-menu">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <a href={"/web"} className="nav_link">Home</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/404"} className="nav_link">Pages</a>
                            </li>
                            <li className="nav_item">
                                <a href={"/web/donations"} className="nav_link">Donations</a>
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
                            <li className="nav_item">
                                <a href={"/web/404"} className="nav_link">
                                    <i className="icofont-shopping-cart"></i>
                                </a>
                            </li>
                            <div className="nav_item">
                                <div className="dropdown">
                                    <div className="nav_tog">
                                        <div className="bar b1" id="bar1"></div>
                                        <div className="bar b2" id="bar2"></div>
                                        <div className="bar b3" id="bar3"></div>
                                    </div>
                                    <input className="drop_input" id="toggle" type="checkbox" checked/>
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
                    <div 
                        className="nav_toggle" 
                        onClick={() => onClickMenu()} 
                        onMouseUp={() => console.log("mouse up")}
                        id="nav-toggle"
                        
                    >
                        <div className="bar b1" id="bar1"></div>
                        <div className="bar b2" id="bar2"></div>
                        <div className="bar b3" id="bar3"></div>
                    </div>
                </nav>
            </header>
    );
}