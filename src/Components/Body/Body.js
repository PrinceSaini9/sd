import React, { useState } from "react";
import "./Body.css";
import image1 from "../../Assets/image1.png";
import topimg from "../../Assets/top.png";
import bottomimg from "../../Assets/bottom.png";
import scholarimg from "../../Assets/scholarimg.png";
import trofyimg from "../../Assets/trofy.png";
import courseimg1 from "../../Assets/courseimg1.png";
import courseimg2 from "../../Assets/courseimg2.png";
import courseimg3 from "../../Assets/courseimg3.png";
import usapng from "../../Assets/usa.png";
import australiapng from "../../Assets/australia.png";
import ukpng from "../../Assets/uk.png";
import irelandpng from "../../Assets/ireland.png";
import canadapng from "../../Assets/canada.png";
import countryimg1 from "../../Assets/country1.png";
import countryimg2 from "../../Assets/country2.png";


const Body = () => {
    const courses = ["IELTS", "GTE", "GRE", "GMAT"];
    const courseCard = [
        {
            img: courseimg1,
            title: "Crack IELTS",
            desc: "Over 2,50,000+ IELTS aspirants got theirdream IELTS Band ",
            time: "4"
        },
        {
            img: courseimg2,
            title: "Boost Your IELTS",
            desc: "Get Full Length Tests, Expert Feedback, Daily Doubt Sessions & More",
            time: "4"
        },
        {
            img: courseimg3,
            title: "Focus Your IELTS",
            desc: "Get Full Length Tests, Expert Feedback, Daily Doubt Sessions & More ",
            time: "4"
        }
    ]
    const [activeCourse, setActiveCourse] = useState("IELTS");
    const countryCard = [
        {
            img: australiapng,
            name: "Australia"
        },
        {
            img: ukpng,
            name: "UK"
        },
        {
            img: usapng,
            name: "USA"
        },
        {
            img: canadapng,
            name: "Canada"
        },
        {
            img: irelandpng,
            name: "Ireland"
        }
    ]
    const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountrySelection = (index) => {
    const updatedSelection = [...selectedCountries];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedCountries(updatedSelection);
  };
    const handleToggle = (course) => {
        setActiveCourse(course === activeCourse ? null : course);
    };
    return (
        <div className="body">
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
            <div className="recommendsec">
                <div className="recommendtop">
                    <div className="recommendtitle">Recommended courses</div>
                    <div className="viewbtn">View All &#8618;</div>
                </div>
                <div className="coursecat">
                    {
                        courses.map((course) => (
                            <div
                                className="toggler"
                                key={course}
                                onClick={() => handleToggle(course)}
                                style={{
                                    borderBottom: activeCourse === course ? '3px solid #673DE6' : '',
                                    color: activeCourse === course ? '#673DE6' : ''
                                }}
                            >
                                {course}
                            </div>
                        ))

                    }
                </div>
                <div className="coursecards">
                    {
                        courseCard.map((item) => (
                            <div className="coursecard" >
                                <img src={item.img} alt="" />
                                <div className="coursecardtitle">{item.title}</div>
                                <div className="coursecarddesc">{item.desc}</div>
                                <div className="coursecardtime"> <Timesvg /> {item.time} Weeks</div>
                                <div className="enrollbtn">Enroll For Free</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="boostsec">
                <div className="boosttitle">Boost your study abroad prep-Connect with experts for free</div>
                <div className="boostdesc">Connect with India's finest counsellors and biggest study abroad community. Talk to a Counsellor</div>
                <div className="boostbtn">Talk to our Counseler</div>
                <div className="agentbox">
                    <div className="agentwhitecircle"> <Agentsvg /> </div>
                </div>
            </div>
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
            <div className="countrysec">
                <div className="countrysectitle">Find Your Classroom in the World</div>
                <div className="countrysecdesc">Choose your dream country</div>
                <div className="countrycards">
                    {countryCard.map((item, index) => (
                        <div className="countrycard" key={index} onClick={() => handleCountrySelection(index)}>
                            <div
                                className={`check-circle ${selectedCountries[index] ? 'checked' : ''}`}
                            ></div>
                            <img src={item.img} alt="" />
                            <div className="countryname">{item.name}</div>
                        </div>
                    ))}
                    <div className="countrycard" onClick={() => handleCountrySelection(countryCard.length)}>
                    <div
                                className={`check-circle ${selectedCountries[countryCard.length] ? 'checked' : ''}`}
                            ></div>
                        Open to all
                    </div>
                </div>
                <div className="countrypngbox">
                    <img src={countryimg1} alt="" />
                    <img src={countryimg2} alt="" />
                </div>
            </div>
            <div className="archieversec">
                <div className="archievertitle">Get a free Masterclass from high achievers</div>
                <div className="archievercards">
                    {
                        [1,2,3].map(i=>(
                            <div className="archievercard">
                                <img src={courseimg3} alt="" />
                                <div className="archieverdesc">Colorado State University USA| App to Admit for Fall'24 intake</div>
                                <div className="archieverdate"> <Timesvg/> Thu 21 Dec | 06:00 - 07:00 pm</div>
                                <div className="archieverregister">
                                    <div className="registered">
                                        <Registersvg/> 400+ Registered
                                    </div>
                                    <div className="registerright">
                                        <div >USA</div>
                                        <div> Masters</div>
                                    </div>
                                </div>
                                <div className="archieverbtn">Book Now</div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
const Timesvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_5_107" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_5_107)">
                <path d="M15.4731 16.5269L16.5269 15.4731L12.75 11.6959V6.99998H11.25V12.3038L15.4731 16.5269ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2166 20 16.1041 19.2208 17.6625 17.6625C19.2208 16.1041 20 14.2166 20 12C20 9.78331 19.2208 7.89581 17.6625 6.33748C16.1041 4.77914 14.2166 3.99998 12 3.99998C9.78331 3.99998 7.89581 4.77914 6.33748 6.33748C4.77914 7.89581 3.99998 9.78331 3.99998 12C3.99998 14.2166 4.77914 16.1041 6.33748 17.6625C7.89581 19.2208 9.78331 20 12 20Z" fill="#727272" />
            </g>
        </svg>
    )
}
const Agentsvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="166" height="166" viewBox="0 0 166 166" fill="none">
            <mask id="mask0_11_146" maskUnits="userSpaceOnUse" x="0" y="0" width="166" height="166">
                <rect width="166" height="166" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_11_146)">
                <path d="M78.7439 141.792V131.417H129.288C129.865 131.417 130.364 131.239 130.785 130.885C131.206 130.53 131.417 130.064 131.417 129.488V81.1111C131.417 67.8896 126.686 56.7587 117.224 47.7183C107.763 38.6779 96.3545 34.1578 83.0001 34.1578C69.6456 34.1578 58.2375 38.6779 48.7759 47.7183C39.3142 56.7587 34.5834 67.8896 34.5834 81.1111V121.84H29.3961C26.0796 121.84 23.2332 120.685 20.8567 118.375C18.4802 116.065 17.2919 113.251 17.2919 109.935V96.5008C17.2919 94.2573 17.9304 92.2022 19.2073 90.3356C20.4842 88.4691 22.1513 86.9683 24.2086 85.8332L24.5279 77.0012C25.0953 69.4727 27.0506 62.4985 30.3936 56.0784C33.7367 49.6583 38.0241 44.0695 43.2559 39.3121C48.4877 34.5547 54.5265 30.8481 61.3722 28.1923C68.2179 25.5364 75.4272 24.2085 83.0001 24.2085C90.5729 24.2085 97.7644 25.5364 104.575 28.1923C111.385 30.8481 117.424 34.537 122.691 39.259C127.958 43.9809 132.246 49.5519 135.553 55.9719C138.861 62.392 140.834 69.3663 141.472 76.8948L141.792 85.554C143.804 86.5027 145.46 87.8594 146.759 89.6241C148.059 91.3887 148.708 93.3572 148.708 95.5297V110.973C148.708 113.145 148.059 115.114 146.759 116.878C145.46 118.643 143.804 120 141.792 120.948V129.488C141.792 132.893 140.57 135.795 138.127 138.193C135.684 140.592 132.738 141.792 129.288 141.792H78.7439ZM63.5803 95.2371C61.8866 95.2371 60.4435 94.6629 59.2508 93.5145C58.0582 92.3663 57.4618 90.9453 57.4618 89.2516C57.4618 87.5578 58.0582 86.1258 59.2508 84.9553C60.4435 83.7848 61.8866 83.1995 63.5803 83.1995C65.274 83.1995 66.7171 83.7848 67.9098 84.9553C69.1025 86.1258 69.6988 87.5578 69.6988 89.2516C69.6988 90.9453 69.1025 92.3663 67.9098 93.5145C66.7171 94.6629 65.274 95.2371 63.5803 95.2371ZM102.42 95.2371C100.726 95.2371 99.283 94.6629 98.0903 93.5145C96.8977 92.3663 96.3013 90.9453 96.3013 89.2516C96.3013 87.5578 96.8977 86.1258 98.0903 84.9553C99.283 83.7848 100.726 83.1995 102.42 83.1995C104.113 83.1995 105.557 83.7848 106.749 84.9553C107.942 86.1258 108.538 87.5578 108.538 89.2516C108.538 90.9453 107.942 92.3663 106.749 93.5145C105.557 94.6629 104.113 95.2371 102.42 95.2371ZM44.0674 84.3832C43.3491 73.0949 46.8606 63.436 54.6019 55.4065C62.3433 47.377 71.9246 43.3623 83.3459 43.3623C92.9405 43.3623 101.407 46.3307 108.745 52.2675C116.082 58.2042 120.536 65.8901 122.106 75.3251C112.28 75.2098 103.202 72.6294 94.8715 67.5838C86.5405 62.5382 80.1448 55.6216 75.6845 46.834C73.9287 55.4354 70.2487 63.0392 64.6444 69.6455C59.0401 76.2517 52.1811 81.1643 44.0674 84.3832Z" fill="#673DE6" />
            </g>
        </svg>
    )
}

const Registersvg = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_24_15"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_24_15)">
    <path d="M12.5962 11.6423C13.0218 11.1795 13.3366 10.6481 13.5404 10.0481C13.7443 9.44808 13.8462 8.82949 13.8462 8.19233C13.8462 7.55516 13.7443 6.93658 13.5404 6.33658C13.3366 5.73658 13.0218 5.20517 12.5962 4.74235C13.4744 4.84364 14.2035 5.2228 14.7837 5.87985C15.3638 6.53689 15.6539 7.30771 15.6539 8.19233C15.6539 9.07693 15.3638 9.84775 14.7837 10.5048C14.2035 11.1619 13.4744 11.541 12.5962 11.6423ZM17.8462 19.3077V16.9615C17.8462 16.4164 17.7353 15.8977 17.5135 15.4056C17.2917 14.9134 16.977 14.491 16.5693 14.1385C17.3359 14.3936 18.0417 14.7378 18.6866 15.1712C19.3314 15.6045 19.6539 16.2013 19.6539 16.9615V19.3077H17.8462ZM19.6539 12.75V10.75H17.6539V9.25003H19.6539V7.25003H21.1538V9.25003H23.1538V10.75H21.1538V12.75H19.6539ZM8.3462 11.6923C7.38372 11.6923 6.55977 11.3496 5.87435 10.6642C5.18895 9.97876 4.84625 9.15481 4.84625 8.19233C4.84625 7.22983 5.18895 6.40588 5.87435 5.72048C6.55977 5.03506 7.38372 4.69235 8.3462 4.69235C9.3087 4.69235 10.1327 5.03506 10.8181 5.72048C11.5035 6.40588 11.8462 7.22983 11.8462 8.19233C11.8462 9.15481 11.5035 9.97876 10.8181 10.6642C10.1327 11.3496 9.3087 11.6923 8.3462 11.6923ZM0.846252 19.3077V17.0846C0.846252 16.5949 0.979261 16.1414 1.24528 15.7241C1.51131 15.3068 1.86676 14.9859 2.31163 14.7616C3.30008 14.2769 4.29719 13.9135 5.30295 13.6712C6.30872 13.4289 7.32314 13.3077 8.3462 13.3077C9.36927 13.3077 10.3837 13.4289 11.3895 13.6712C12.3952 13.9135 13.3923 14.2769 14.3808 14.7616C14.8257 14.9859 15.1811 15.3068 15.4471 15.7241C15.7132 16.1414 15.8462 16.5949 15.8462 17.0846V19.3077H0.846252ZM8.3462 10.1923C8.8962 10.1923 9.36704 9.99649 9.7587 9.60483C10.1504 9.21316 10.3462 8.74233 10.3462 8.19233C10.3462 7.64233 10.1504 7.17149 9.7587 6.77983C9.36704 6.38816 8.8962 6.19233 8.3462 6.19233C7.7962 6.19233 7.32537 6.38816 6.9337 6.77983C6.54204 7.17149 6.3462 7.64233 6.3462 8.19233C6.3462 8.74233 6.54204 9.21316 6.9337 9.60483C7.32537 9.99649 7.7962 10.1923 8.3462 10.1923ZM2.3462 17.8077H14.3462V17.0846C14.3462 16.882 14.2876 16.6945 14.1703 16.5221C14.0529 16.3497 13.8936 16.209 13.6924 16.1C12.8308 15.6756 11.9523 15.3542 11.0569 15.1356C10.1615 14.917 9.25792 14.8077 8.3462 14.8077C7.4345 14.8077 6.53094 14.917 5.6355 15.1356C4.74009 15.3542 3.8616 15.6756 3.00005 16.1C2.79877 16.209 2.63948 16.3497 2.52218 16.5221C2.40486 16.6945 2.3462 16.882 2.3462 17.0846V17.8077Z" fill="#727272"/>
  </g>
</svg>
    )
}

export default Body;