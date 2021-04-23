import React from 'react';
import moment from 'moment';
import './stylesheet.css';

// Import Components Dependencies
// Images
const smalladd = '../assets/images/300x250.png';
const Ads = '../assets/images/add.png';
const backArrowImg = '../assets/images/backarrow.png';

function Search(){
    if(JSON.parse(localStorage.getItem('search_res'))){
   return(
       <>  
       <div className="add_wrapper">
                <img src={Ads} alt="ad" />
        </div>
        <div className="nevigation_section">
                <div className="container">
                    <a href="www.facebook.com" className="active">Home  </a>
                    <span> <img src={backArrowImg} alt="back1" /></span>
                    <a href="www.facebook.com">Search</a>
                    <span> <img src={backArrowImg} alt="back2" /></span>
                    <a href="www.facebook.com">{window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}</a>
                </div>
            </div>

            {/* Search Main Section */}
            <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                         <div className="content_left">
                             <slot>

   {/* top heading */}
   <div className="author_head">
        <h2>{JSON.parse(localStorage.getItem('search_res')).length} Results for {`'${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}'`}</h2>
        <div className="update_tab">
            <a href="www.facebook.com">Oldest</a>
            <a href="www.facebook.com" className="active">Newest</a>
        </div>
        </div>
        {/* end */}

        {/* CelebrityList */}
        <div>
        <ul className="author_list">
            {
                JSON.parse(localStorage.getItem('search_res')).map((data)=>{
                    return(
                        <li>
                        <div className="clearfix">
                        <figure>
                            <img src={data.feature_image_data.url} alt="list_img1"/>
                        </figure>
                        <div className="author_detail">
                            <span>{moment(data.updated_at).format("MMM DD, YYYY")}</span>
                                <p>{data.headline}</p>
                            </div>
                            </div>
                    </li> 
                    )
                })
            }

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
                            {
                                JSON.parse(localStorage.getItem('rhs_story')).data.feed.templatedata[0].content_data.widget_data.widget_data.main_data.map((data)=>{
                                    return(
                                        <div className="right_card">
                                            <figure><img src={data.feature_image_data.url} alt="card" /></figure>
                                            <p>{data.headline}</p>
                                        </div>
                                    )

                                })
                            }
                            
                         </div>
                    </div>
                </div>   
   </section>
       </>
   )
   }else{
    return(
            <div></div>
    )
   }
}

export default Search;