import React, { useState } from "react";
import "./Body.css";
import usapng from "../../Assets/usa.png";
import australiapng from "../../Assets/australia.png";
import ukpng from "../../Assets/uk.png";
import irelandpng from "../../Assets/ireland.png";
import canadapng from "../../Assets/canada.png";
import countryimg1 from "../../Assets/country1.png";
import countryimg2 from "../../Assets/country2.png";
import CoursesSection from "../Courses/CoursesSection";
import TopSection from "../LandingPageComponents/TopSection";
import Archiever from "../LandingPageComponents/Archiever";
import Boost from "../LandingPageComponents/Boost";
import ScholarSection from "../LandingPageComponents/ScholarSection";

const Body = () => {


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

    return (
        <div className="body">
            <TopSection />
            <CoursesSection />
            <Boost />

            <ScholarSection />
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
            <Archiever />
        </div>
    )
}





export default Body;