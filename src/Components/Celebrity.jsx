import React, {useState,useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import '../Styles/Global.css';
import '../Styles/Fashion.css';

// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';


function Celebrity(){
    // State Variables
    const [celebrityData, setCelebritydata] = useState(null);

    useEffect(()=>{
        // Get API
        async function getCelebrityData(){
            const res = await axios.get('http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=celebrity&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all');
            console.log("res- ", res);
            setCelebritydata(res.data.data.feed);
        }

        getCelebrityData();
    },[]);
if(celebrityData){
    return(
        <>
        {/* ads section */}
        <div className="add_wrapper">
                <img src={Ads} alt="ad" />
        </div>

        {/* Navigation */}
        <div class="nevigation_section">
                <div class="container">
                    <a href="www.facebook.com" class="active">Home  </a>
                    <span> <img src={backArrowImg} alt="back" /></span>
                    <a href="www.facebook.com">{celebrityData[0].primary_section_name}</a>
                </div>
            </div>

            {/* Heading */}
            <h1 className="tittle_text"><span>{celebrityData[0].primary_section_name}</span></h1>

            <section class="content_wrapper">
                <div class="container">
                    <div class="content_inner">
                        <div class="content_left">
            
                        {/* celebrity */}     
                        <div class="celebrity_top">
                            <figure>
                            <img src={celebrityData[0].feature_image_data.url} alt="celebrity_img_main" />
                            </figure>
                            <h3>{celebrityData[0].headline}</h3>
                        </div> 
                        </div>	                                  	
            <div class="content_right">
                {/* Small ADS */}
            <figure class="add_box">
                 <img src={short_Ads} alt="short-ads-img" />
            </figure>

            {/* rhs story */}
            <h4>Must Read</h4>
            <div class="right_card">
                <figure><img src={celebrityData[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p>{celebrityData[1].headline}</p>
            </div>
			</div>
            </div>
            <ul class="section_list">
            {
                celebrityData.slice(2).map((celebrity)=>{
                    return(
                        <li>
                        <div class="list_detail">
                            <strong>{moment(celebrity.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><a href={celebrity.url}>{celebrity.headline}</a></h3>
                            <p>{celebrity.introtext}</p>
                            <span>By <a href="/authors/bazaar-india">{celebrity.author_data[0].author_name}</a></span>
                        </div>
                        <figure class="list_pic">
                            <img src={celebrity.feature_image_data.url} alt="list_img1"/>
                        </figure>
                    </li> 
                    )
                })
            }

				 </ul>
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

export default Celebrity;