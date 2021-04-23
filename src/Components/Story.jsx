import React, {useState,useEffect} from 'react';
import axios from 'axios';
// import moment from 'moment';
import '../Styles/Story.css';

// Images
const Ads = '../assets/images/add.png';
const short_Ads = '../assets/images/300x250.png';
const backArrowImg = '../assets/images/backarrow.png';


function Story(){
    // State Variables
    const [storyData, setStorydata] = useState(null);

    useEffect(()=>{
        // Get API
        async function getStoryData(){
            const res = await axios.get(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/details/${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}`);
            console.log("res- ", res);
            setStorydata("check - ",res.data.data.feed);
        }
        getStoryData();
    },[]);
if(storyData){
    return(
        <>
        {/* ads section */}
        <div className="add_wrapper">
                <img src={Ads} alt="ad" />
        </div>

        {/* Navigation */}
        <div className="nevigation_section">
                <div className="container">
                    <a href="www.facebook.com" className="active">Home  </a>
                    <span> <img src={backArrowImg} alt="back" /></span>
                    <a href="www.facebook.com">{storyData[0].primary_section_name}</a>
                </div>
            </div>

            {/* Story Section */}
            <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
                            <h1>{storyData[0].headline}</h1>
                            <span>{storyData[0].introtext}</span>
                            <div className="user_profile">
                                {/* <figure>
                                    <img src={} alt="story_profile" />
                                </figure> */}
                                {/* <i>{moment(storyData[0].updated_at).format("MMM DD, YYYY")} | by <a href="/authors/bazaar-india">{storyData.author_data[0].author_name}</a>  </i> */}
                            </div>

							<figure className="story_one">
                                    <img src={storyData[0].feature_image_data.url} alt="story_img" />
                            </figure>
				<p></p>
        </div>
						
        <div className="content_right">
                {/* Small ADS */}
            <figure className="add_box">
                 <img src={short_Ads} alt="short-ads-img" />
            </figure>

            {/* rhs story */}
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

export default Story;