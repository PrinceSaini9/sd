import React from "react";
import "./TopSection.css";
import image1 from "../../Assets/image1.png";
import topimg from "../../Assets/top.png";
import bottomimg from "../../Assets/bottom.png";

const TopSection = () => {
  return(
    <div className="topsec">
                <div className="topleft">
                    <div className="lefttitle">Studying Abroad Simplified International Education in your Budget</div>
                    <div className="topdesc">Globally Accredited & Recognized Degrees Post Study Work Visa Qualified Programs On-Campus Scholarships Available</div>
                    <div className="topbtngrp">
                        <div className="startbtn">Start Your Journey</div>
                        <div className="talkbtn">TALK To An Expert</div>
                    </div>
                </div>

                <div className="topright">
                    <div className="topimg"><img src={topimg} alt="" /></div>
                    <div className="bottomimg"><img src={bottomimg} alt="" /></div>
                    <img src={image1} alt="" />
                </div>
            </div>
  )
}
export default TopSection;