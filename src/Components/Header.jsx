// Import Dependencies
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom';
import './Header.css';
import '../Styles/Searchbar.css';

// Images
const logo = '../assets/images/logo.png';
const strickyLogo = '../assets/images/stricylogo.png';
const fb_img = '../assets/images/facebook.png';
const instra_img = '../assets/images/instrgram.png';
const twitter_img = '../assets/images/twitter.png';
const serach_img = '../assets/images/search.png';
const cross_img = '../assets/images/cross.png';
const input_search_img = '../assets/images/inputsearchicon.png';


function Header() {
 // For route navigatation
 const history = useHistory();

    const [isActive, setBoolean] = useState(null);
    const [isSearch, setSearch] = useState(false);

    // Search Value State
    const [searchData, setSearchData] = useState(null);
    const [searchRes, setSearchRes] = useState(null);
    
    useEffect(()=>{
        getSearchData()
    },[]);

    // Get API
    async function getSearchData(){
        const res = await axios.get(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/searchs?name=${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}&page=1&limit=10&order_by=publish_up%20asc`);
        setSearchRes(res.data.data.feed);
    }

    const onScroll = ()=> {
        const headerOffset = document.getElementById('fixedNav').getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > headerOffset) {
            setBoolean(true);
        }else{
            setBoolean(false); 
        }
    }
    window.addEventListener('scroll', onScroll)

     // Search input function
   function getData(val){
    setSearchData(val.target.value);
   }
   function GetSearchInputData(){
    localStorage.removeItem('search_res');
    history.push(`/search/${searchData}`);
    getSearchData();
    localStorage.setItem('search_res',JSON.stringify(searchRes));
    setSearch(false);
   }
    return (
        <>
            <header id="header">
                <div className="upperheader">
                    <div className="container relative" >
                        <a href="www.facebook.com">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="follow_us">
                            <label>
                                Follow us on:
                         </label>
                            <a href="www.facebook.com">
                                <img src={fb_img} alt="social_image" />
                            </a>
                            <a href="www.facebook.com">
                                <img src={instra_img} alt="social_image" />
                            </a>
                            <a href="www.facebook.com">
                                <img src={twitter_img} alt="social_image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="fixedNav" className={isActive ? 'fixed' : 'bottomheader'}>
                    <div className="container relative flex_wrap">
                    <a href="www.facebook.com" className="strickylogo">
                        <img src={strickyLogo} alt="stickyLogo" />
                    </a>
                    <nav className="menu">
                        <NavLink exact activeClassName={"activeNavMenu"} to="/">Home</NavLink>
                        <NavLink activeClassName={"activeNavMenu"} to="/fashion">FASHION</NavLink>
                        <NavLink activeClassName={"activeNavMenu"} to="/beauty">BEAUTY</NavLink>
                        <NavLink activeClassName={"activeNavMenu"} to="/culture">CULTURE</NavLink>
                        <NavLink activeClassName={"activeNavMenu"} to="/celebrity">CELEBRITY</NavLink>
                        <NavLink activeClassName={"activeNavMenu"} to="/travelAndFood">TRAVEL AND FOOD</NavLink>
                    </nav>


                    <span className="searchicon" onClick={()=>setSearch(true)}>
                        <img className="searchImg" src={serach_img} alt="search"/>
                    </span>
                    </div>
                </div>
            </header>

            {/* Search bar */}
            {
            isSearch?<div className="overlay">
            <div className="container">
                <div className="search_box">
                    <div className="search_text">
                        <label>Search Here</label>
                        <span className="cross" onClick={()=>
                            setSearch(false)}>
                            <img src={cross_img} alt="crossIcon" />
                        </span>
                    </div>
                    <div className="inputwrapper relative">
                        <input type="text" placeholder="Type your keyword(s) here..." onChange={getData} />
                        <span className="search_input" >
                            <img src={input_search_img} alt="search" onClick={GetSearchInputData}/>
                        </span>
                    </div>
                    </div>
                    </div>
                    </div>:null
}
        </>
    )
}
export default Header;