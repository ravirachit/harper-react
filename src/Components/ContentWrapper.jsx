import React from 'react';
import './Header.css';
import './stylesheet.css'

// Images
const smalladd = './assets/images/300x250.png';
const sideImg1 = './assets/images/sidePic1.png';
const sideImg2 = './assets/images/sidePic2.png';
const sideImg3 = './assets/images/sidePic3.png';
const sideImg4 = './assets/images/sidePic4.png';

// Author Image
const AuthImg1 = './assets/images/authorpic1.png';
const AuthImg2 = './assets/images/authorpic2.png';
const AuthImg3 = './assets/images/authorpic3.png';
const AuthImg4 = './assets/images/authorpic4.png';
const AuthImg5 = './assets/images/authorpic5.png';
const AuthImg6 = './assets/images/authorpic6.png';


function ContentWrapper(){
   return(
       <>  
       <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                         <div className="content_left">
                             <slot>

   {/* top heading */}
   <div className="author_head">
        <h2>1,500 Results for ‘Beauty’</h2>
        <div className="update_tab">
            <a href="www.facebook.com">Oldest</a>
            <a href="www.facebook.com" className="active">Newest</a>
        </div>
        </div>
        {/* end */}

        {/* CelebrityList */}
        <div>
        <ul className="author_list">
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg1} alt="back" />
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Jennifer Lopez's JLo Beauty Is Here—See Every Product</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg2} alt="back" />   
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Beauty Industry Legend Leonard Lauder Opens Up About His Mother Esteé in New Memoir</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg3} alt="back" />
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Natalie Portman Says That "Being Sexualized as a Child" Made Her Feel "Unsafe"</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg4} alt="back" />
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Helen Mirren on Aging 'Disgracefully,' Quarantine Makeup, and Staying Fit</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg5} alt="back" />
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>How Bazaar editors use their beauty routines to boost their mental wellbeing</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="clearfix">
                                        <figure>
                                            <img src={AuthImg6} alt="back" />
                                        </figure>
                                        <div className="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Queen's Gambit star Anya Taylor-Joy says she's "not beautiful enough to be in films"</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
    </div>
    {/* end */}



                             </slot>
                          </div>
                         <div className="content_right">
                                <figure className="add_box">
                                    <img src={smalladd} alt="smallAdd" />
                                </figure>
                            <h4>Must Read</h4>
                            <div className="right_card">
                                <figure><img src={sideImg1} alt="card" /></figure>
                                <p>How Kate and Meghan Are Staying Fit in Quarantine</p>
                            </div>
                            <div className="right_card">
                                <figure><img src={sideImg2} alt="card" /></figure>
                                <p>YSL Just Dropped a Zoë Kravitz Lipstick Collection</p>
                            </div>
                            <div className="right_card">
                                <figure><img src={sideImg3} alt="card" /></figure>
                                <p>These 14 Black-Owned Activewear Brands Will Stand Out in Your Workout Wardrobe</p>
                            </div>
                            <div className="right_card">
                                <figure><img src={sideImg4} alt="card" /></figure>
                                <p>The Duchess of Cambridge has the world’s most popular engagement ring</p>
                            </div>
                         </div>
                    </div>
                </div>   
   </section>
       </>
   )
}

export default ContentWrapper;