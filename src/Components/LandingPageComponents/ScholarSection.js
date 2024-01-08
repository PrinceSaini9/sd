import React from "react";
import "./ScholarSection.css";
import scholarimg from "../../Assets/scholarimg.png";
import trofyimg from "../../Assets/trofy.png";

const ScholarSection = () => {
 return(
    <div className="scholarsec">
                <div className="scholarleft">
                    <div className="scholartitle"><img src={trofyimg} alt="" /> SD Abroad Scholarships</div>
                    <div className="scholardesc">Get dream scholarships worth ₹7,00,00,000*</div>
                    <div className="scholardesc2">Win up to ₹ 3,00,000* to study in the UK, Canada & US.</div>
                    <div className="scholarbtn">Explore Now</div>
                </div>
                <div className="scholarright">
                    <img src={scholarimg} alt="" />
                </div>
            </div>
 )
}
export default ScholarSection;