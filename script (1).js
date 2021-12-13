const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        nav.classList.toggle('show-menu')
        }
    }
showMenu('nav-toggle', 'nav-menu')


// Toggle from straight to cross
function onClickMenu(){
    showMenu('nav-toggle','nav-menu')
    document.getElementById("nav-toggle").classList.toggle("change")
}


//Reusable elements
class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <header class="header_wrap" id="header">
            
                
                    <!-- navigation menu -->
                <nav class="nav_bar">
                   

                    <!----------Navigation Links--------->
                    <div class="nav_menu" id="nav-menu">
                        <ul class="nav_list">
                            <li class="nav_item"><a href="index.html" class="nav_link">
                            <button type="button">
                            <i class="fa fa-heart"></i> Donate</button>
                            </a></li>
                            <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
                            <li class="nav_item"><a href="pages.html" class="nav_link">Pages</a></li>
                            <li class="nav_item"><a href="dponations.html" class="nav_link">Donations</a></li>
                            <a href="#" class="nav_logo"><img src="images/logo.png" alt="KWLC Logo"></a>
                            <li class="nav_item"><a href="event.html" class="nav_link">Events</a></li>
                            <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                            <li class="nav_item"><a href="shop.html" class="nav_link">Shop</a></li>
                            <li class="nav_item"><a href="cart.html" class="nav_link"><i class="icofont-shopping-cart"></i></a></li>
                            <div class="nav_item">
                                <div class="dropdown">
                                    <div class="nav_tog">
                                        <div class="bar b1" id="bar1"></div>
                                        <div class="bar b2" id="bar2"></div>
                                        <div class="bar b3" id="bar3"></div>
                                    </div>
                                    <input class="drop_input" id="toggle" type="checkbox" checked>
                                    <ul class="dropdown_contents">
                                        <li class="dropdown_menu"><a href="about.html" class="nav_link">About us</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Team</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Beliefs</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Community</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Branches</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Payment page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <!-------Menu bars-------->
                    <div class="nav_toggle" onclick="onClickMenu()" id="nav-toggle">
                        <div class="bar b1" id="bar1"></div>
                        <div class="bar b2" id="bar2"></div>
                        <div class="bar b3" id="bar3"></div>
                    </div>
                </nav>
            </header>
        `
    }
}



customElements.define('my-header', myHeader)


class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `

        <footer class="footer_container">
            <div class="footer_col col_address">
                <div class="footer_header logo_text">
                    <div class="footer_logo"><img src="images/KWLCLogo.svg" alt="KWLC Logo"></div>
                    <h5 class="section_subtitle">Kingdom Ways Living Church</h5>
                </div>
                <div class="contact_info">
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-phone" aria-hidden="true"></i></label>
                        <p class="contact_text">+ 234 70 433 2832</p> 
                    </div>
                
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-map-marker" aria-hidden="true"></i> </label>
                        <p class="contact_text">24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos</p>
                    </div>
                
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                        <p class="contact_text">info@kwlchq.org</p>
                    </div>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Contact Us</h4>
                </div>
                <div class="contact_info">
                <form action="">
                    <input type="text" placeholder="Name" id="">
                    <input type="email" placeholder="Email" id="">
                    <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
                </form>
                <button class="button">Send</button>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Up coming Events</h4>
                </div>

                <div class="contact_col">
                <h4>Weeding</h4>
                <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Weeding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Weeding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Follow Us</h4>
                </div>
                <div class="contact_info txt_icons">
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></p>
                </div>
            </div>
            
        </footer>
        `
    }
}

customElements.define('my-footer', myFooter)

