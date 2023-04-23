import React, { useRef } from 'react'
import "./Header.css";
import logo from "../../assets/logo/woxrologo.png"
const Header = () => {
    const ref=useRef();
    const toggle=()=>{
        if(ref.current.classList.contains("")){

        }else if(!ref.current.classList.contains("")){

        }
    }
  return (
    <div className='header'>
        <ul class="hiring">
            <li class="hiring-inline">
                <a style={{color:"white"}} href="https://www.woxro.com/careers" class="link-w-text">
                    <b>Now Hiring &nbsp;: &nbsp;Looking for a job in Full Stack Development?</b>
                    {/* <p>Looking for a job in Full Stack Development? </p> */}
                </a>
            </li>
            <li class="hiring-inline">
                <a href="tel:487 2080 212" style={{display:"flex",alignItems:"center"}}>
                <i class="fas fa-phone" aria-hidden="true"></i><strong>&nbsp;&nbsp;+91 487 2080 212</strong>
                </a>&nbsp;&nbsp;&nbsp;
                <span>
                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i><p>&nbsp;&nbsp;Leshore Business Park, Thrissur</p>
                </span>
            </li>
        </ul>

        {/* logo */}
        <section class="header-sec2" id="navbar-mob">
        <img src={logo} width="205.875" height="56" alt="woxro"/>
        <span onclick="openNavDrawer()" class="menu-button">
            <i class="fas fa-bars " id="drawer-bar-icon" aria-hidden="true"></i>
        </span>
    </section>

    {/* navbar */}
    <section class="header-nav-ul">
            <a href="https://woxro.com/">Home</a>
            <a href="https://woxro.com/./aboutus">About Us</a>
            <a href="https://woxro.com/./service">Services</a>
            <a href="https://woxro.com/./technology">Technology</a>
            <a href="https://woxro.com/./careers">Careers</a>
            <a href="https://woxro.com/./blog" aria-label="our blogs section">Blogs</a>
            <a href="https://woxro.com/./ourworks">Our Works</a>
            <a href="https://woxro.com/./contactus">Contact us</a>
        </section>


        {/* hero */}
        <section class="header-banner" id="header-banner">

        <div class="header-banner-cont">
            <h1 class="header-banner-head">Kerala's Leading Web <br/>Design Company</h1>
           <p class="header-banner-para">Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce &amp; Mobile App Development Services.</p>
  


        </div>
        </section>
    </div>
  )
}

export default Header
