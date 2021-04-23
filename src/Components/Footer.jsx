// Import Dependencies
import React from 'react';
import './stylesheet.css'

// Images
const footer_img = '../assets/images/footerlogo.png';
const fb_img = '../assets/images/facebook.png';
const instra_img = '../assets/images/instrgram.png';
const twitter_img = '../assets/images/twitter.png'

function Footer(){
    return(
        <>
        <footer id="footer">
            <div className="top_footer">
                <div className="container clearfix">
                    <div className="quick_menu">
                        <h4>QUICK LINKS</h4>
                        <ul className="footer_menu">
                            <li>
                                <a href="www.facebook.com">Home</a>
                            </li>
                            <li>
                                <a href="www.facebook.com">Culture</a>
                            </li>
                            <li>
                                <a href="www.facebook.com">Fashion</a>
                            </li>
                            <li>
                                <a href="www.facebook.com">Celebrity</a>
                            </li>
                            <li>
                                <a href="www.facebook.com">Beauty</a>
                            </li>
                            <li>
                                <a href="www.facebook.com">Travel &amp; Food</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick_menu our_site">
                        <div className="flex_wrap">
                            <div className="our_site_menu">
                                <h4>OUR SISTER SITES</h4>
                                <ul className="footer_menu">
                                    <li>
                                        <a href="www.facebook.com">Cosmopolitan</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Bride’s Today</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="our_site_menu_right">
                                <ul className="footer_menu">
                                    <li>
                                        <a href="www.facebook.com">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Advertisers</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Feedback</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Advertise with Us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_logo_right">
                        <a href="www.facebook.com" className="footer_logo">
                            <img src={footer_img} alt="footerlogo" />
                        </a>
                        <div className="footer_follow_us">
                            <label>
                                Follow us on: 
                             </label>
                            <a href="www.facebook.com" className="">
                                <img src={fb_img} alt="facebook" />
                            </a>
                            <a href="www.facebook.com" className="">
                                <img src={instra_img} alt="instagram" />
                            </a>
                            <a href="www.facebook.com" className="">
                                <img src={twitter_img} alt="tiwtter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                    <span>Copyright © 2021 Living Media India Limited. For reprint rights: Syndications Today. India Today Group.</span>
                </div>
            </div>

        </footer>
        </>
    )
}
export default Footer;