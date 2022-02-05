import React from 'react';
import "./Options.css";
import { Link } from "react-router-dom";
import Bitcoin from './Bitcoin.png';
import Apple from "./Apple.png";
import Business from "./Business.png";
import Entertainment from "./Entertainment.png";
import General from "./General.png";
import HeadlinesIndia from "./Headlines India.png";
import TrendingUS from "./Trending US.png";
import Technology from "./Technology.png";
import Verified from "./verified.png";

function Options() {
  return (
      <>
      <div className='option'>
        <h1>Live Spaces</h1>
        <div className='option1'>
            <img src={Verified} height="10px" width="45px"/> 
            <p>All NFTs on cyber either belong to or were minted by their Space Creater</p><br/>
        </div>
        <p>A minimal website for everyday news, used figma for buttons in header.</p> 
      </div>
      <div className='Options'>
        <div className='opt'>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}><img src={Technology}/> </Link>
        </div>
        <div className='opt'>
          <Link to="/bitcoin" style={{ textDecoration: "none", color: "black" }}><img src={Bitcoin}/></Link>
        </div>
        <div className='opt'>
          <Link to="/apple" style={{ textDecoration: "none", color: "black" }}><img src={Apple}/></Link>
        </div>
        <div className='opt'>
          <Link to="/business" style={{ textDecoration: "none", color: "black" }}><img src={Business}/> </Link>
        </div>
        <div className='opt'>
          <Link to="/entertainment" style={{ textDecoration: "none", color: "black" }}><img src={Entertainment}/> </Link>
        </div>
        <div className='opt'>
          <Link to="/general" style={{ textDecoration: "none", color: "black" }}><img src={General}/> </Link>
        </div>
        <div className='opt'>
          <Link to="/headlines-in" style={{ textDecoration: "none", color: "black" }}><img src={HeadlinesIndia}/> </Link>
        </div>
        <div className='opt'>
          <Link to="/headlines-us" style={{ textDecoration: "none", color: "black" }}><img src={TrendingUS}/> </Link>
        </div>
      </div>
      </>
  );
}

export default Options;
