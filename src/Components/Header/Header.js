import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/logo.png"

const Dropdown = ({ options, isOpen }) => {
    return (
        <div className="dropdown" style={{ display: isOpen ? 'block' : 'none' }}>
            {options.map((option, index) => (
                <div className="dropdown-option" key={index}>
                    {option}
                </div>
            ))}
        </div>
    );
};

const NavbarItem = ({ label, options, isOpen, toggleDropdown }) => {

    return (
        <div className="navbar-item" onClick={toggleDropdown}>
            {label} <ArrowDown />
            <Dropdown options={options} isOpen={isOpen} />
        </div>
    );
};

const Header = () => {
    const [dropdowns, setDropdowns] = useState({
        studyAbroad: false,
        ielts: false,
        lang: false,
    });

    const options = {
        studyAbroad: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        ielts: ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
        lang: ['English', 'Spanish', 'French', 'German'],
    };

    const toggleDropdown = (dropdown) => {
        setDropdowns((prevDropdowns) => ({
            ...Object.fromEntries(Object.keys(prevDropdowns).map((key) => [key, key === dropdown ? !prevDropdowns[key] : false])),
        }));
    };

    const [menu, setMenu] = useState(false);
    const handleicon = () => {
        setMenu(true);
    }
    const closeicon = () => {
        setMenu(false)
    }
    return (
        <div className="header">
            {!menu && (
                <>
                    <img src={Logo} alt="" />

                    <div className="rightsec">
                        <div className="navbar">
                            {Object.keys(dropdowns).map((dropdown, index) => (
                                <NavbarItem
                                    key={index}
                                    label={dropdown === 'lang' ? 'Language' : dropdown.charAt(0).toUpperCase() + dropdown.slice(1)}
                                    options={options[dropdown]}
                                    isOpen={dropdowns[dropdown]}
                                    toggleDropdown={() => toggleDropdown(dropdown)}
                                />
                            ))}
                            <div className="navbar-item">Scholarship</div>
                            <div className="navbar-item">Blogs</div>
                        </div>
                        <div className="contact">
                            <div className="number">
                                <Call /> 18002102030
                            </div>
                            <div className="signbtn">
                                <Sign /> Sign In
                            </div>
                            <div className="menuicon" onClick={handleicon}>&#9776;</div>
                        </div>
                    </div>
                </>
            )}
            {
                menu && (
                    <div className="menucontainer">
                        <img src={Logo} alt="" />
                        <div className="closeicon" onClick={closeicon} >&#10006;</div>
                        <div className="menubar">
                        {Object.keys(dropdowns).map((dropdown, index) => (
                                <NavbarItem
                                    key={index}
                                    label={dropdown === 'lang' ? 'Language' : dropdown.charAt(0).toUpperCase() + dropdown.slice(1)}
                                    options={options[dropdown]}
                                    isOpen={dropdowns[dropdown]}
                                    toggleDropdown={() => toggleDropdown(dropdown)}
                                />
                            ))}
                            <div className="navbar-item">Scholarship</div>
                            <div className="navbar-item">Blogs</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
const ArrowDown = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <mask id="mask0_99_1684" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                <rect width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_99_1684)">
                <path d="M17.5 21.3702L11.0778 14.948H23.9222L17.5 21.3702Z" fill="#727272" />
            </g>
        </svg>
    )
}
const Call = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <mask id="mask0_99_1697" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
                <rect width="15" height="15" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_99_1697)">
                <path d="M12.1502 12.8125C10.9723 12.8125 9.78903 12.5386 8.60034 11.991C7.41164 11.4433 6.3195 10.6706 5.32391 9.67305C4.32832 8.67545 3.55669 7.58331 3.00901 6.39663C2.46133 5.20993 2.18749 4.02764 2.18749 2.84977C2.18749 2.66055 2.24999 2.50287 2.37499 2.37672C2.49999 2.25057 2.65624 2.1875 2.84374 2.1875H4.88218C5.04003 2.1875 5.17926 2.23898 5.29985 2.34195C5.42045 2.44492 5.49716 2.57213 5.53001 2.72356L5.88818 4.56248C5.91302 4.73316 5.90782 4.8798 5.87256 5.00239C5.83731 5.12498 5.774 5.22795 5.68265 5.31128L4.23915 6.71633C4.47152 7.14181 4.73695 7.54425 5.03543 7.92366C5.33391 8.30307 5.65702 8.66546 6.00477 9.01081C6.34773 9.35376 6.71232 9.67227 7.09854 9.96634C7.48476 10.2604 7.90183 10.5341 8.34974 10.7873L9.75238 9.37259C9.85014 9.27083 9.96853 9.19952 10.1076 9.15866C10.2466 9.11779 10.391 9.10778 10.5409 9.12861L12.2764 9.48197C12.4343 9.52364 12.5631 9.60416 12.6628 9.72355C12.7626 9.84294 12.8125 9.97837 12.8125 10.1298V12.1562C12.8125 12.3437 12.7494 12.5 12.6232 12.625C12.4971 12.75 12.3394 12.8125 12.1502 12.8125ZM3.79565 5.82933L4.91104 4.76202C4.93107 4.74599 4.94409 4.72395 4.9501 4.69591C4.95611 4.66785 4.95511 4.64181 4.9471 4.61778L4.67546 3.22114C4.66745 3.18909 4.65343 3.16505 4.6334 3.14903C4.61337 3.133 4.58733 3.12498 4.55527 3.12498H3.21873C3.1947 3.12498 3.17466 3.133 3.15863 3.14903C3.1426 3.16505 3.13459 3.18508 3.13459 3.20913C3.16664 3.63621 3.23655 4.0701 3.34432 4.51081C3.4521 4.95152 3.60254 5.39103 3.79565 5.82933ZM9.23313 11.2308C9.6474 11.4239 10.0795 11.5715 10.5294 11.6737C10.9793 11.7758 11.3998 11.8365 11.7908 11.8558C11.8149 11.8558 11.8349 11.8477 11.8509 11.8317C11.867 11.8157 11.875 11.7957 11.875 11.7716V10.4567C11.875 10.4247 11.867 10.3986 11.8509 10.3786C11.8349 10.3585 11.8109 10.3445 11.7788 10.3365L10.4663 10.0697C10.4423 10.0617 10.4213 10.0607 10.4032 10.0667C10.3852 10.0727 10.3662 10.0857 10.3461 10.1058L9.23313 11.2308Z" fill="#1C1B1F" />
            </g>
        </svg>
    )
}
const Sign = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_99_1678" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_99_1678)">
                <path d="M6.02311 17.2923C6.87311 16.6615 7.79906 16.1635 8.80098 15.7981C9.8029 15.4327 10.8692 15.25 12 15.25C13.1308 15.25 14.1971 15.4327 15.199 15.7981C16.2009 16.1635 17.1269 16.6615 17.9769 17.2923C18.5987 16.609 19.0913 15.8179 19.4548 14.9192C19.8183 14.0205 20 13.0474 20 12C20 9.78331 19.2208 7.89581 17.6625 6.33748C16.1042 4.77914 14.2167 3.99998 12 3.99998C9.78334 3.99998 7.89584 4.77914 6.33751 6.33748C4.77917 7.89581 4.00001 9.78331 4.00001 12C4.00001 13.0474 4.18174 14.0205 4.54521 14.9192C4.90867 15.8179 5.40131 16.609 6.02311 17.2923ZM12.0003 12.75C11.0873 12.75 10.3173 12.4366 9.69041 11.8099C9.06349 11.1831 8.75003 10.4133 8.75003 9.50028C8.75003 8.58726 9.06339 7.81729 9.69011 7.19038C10.3168 6.56346 11.0867 6.25 11.9997 6.25C12.9127 6.25 13.6827 6.56336 14.3096 7.19008C14.9365 7.81681 15.25 8.58668 15.25 9.49968C15.25 10.4127 14.9366 11.1827 14.3099 11.8096C13.6832 12.4365 12.9133 12.75 12.0003 12.75ZM12 21.5C10.6808 21.5 9.44328 21.2519 8.28753 20.7557C7.13176 20.2596 6.12631 19.5839 5.27118 18.7288C4.41606 17.8737 3.74043 16.8682 3.24428 15.7125C2.74811 14.5567 2.50003 13.3192 2.50003 12C2.50003 10.6807 2.74811 9.44325 3.24428 8.2875C3.74043 7.13173 4.41606 6.12628 5.27118 5.27115C6.12631 4.41603 7.13176 3.7404 8.28753 3.24425C9.44328 2.74808 10.6808 2.5 12 2.5C13.3192 2.5 14.5567 2.74808 15.7125 3.24425C16.8682 3.7404 17.8737 4.41603 18.7288 5.27115C19.5839 6.12628 20.2596 7.13173 20.7557 8.2875C21.2519 9.44325 21.5 10.6807 21.5 12C21.5 13.3192 21.2519 14.5567 20.7557 15.7125C20.2596 16.8682 19.5839 17.8737 18.7288 18.7288C17.8737 19.5839 16.8682 20.2596 15.7125 20.7557C14.5567 21.2519 13.3192 21.5 12 21.5ZM12 20C12.9026 20 13.7728 19.8548 14.6106 19.5644C15.4484 19.274 16.1923 18.8679 16.8423 18.3461C16.1923 17.8436 15.458 17.4519 14.6394 17.1711C13.8208 16.8903 12.941 16.75 12 16.75C11.059 16.75 10.1776 16.8887 9.35576 17.1663C8.53396 17.4439 7.80126 17.8371 7.15768 18.3461C7.80768 18.8679 8.5516 19.274 9.38943 19.5644C10.2272 19.8548 11.0974 20 12 20ZM12 11.25C12.4974 11.25 12.9135 11.0827 13.2481 10.7481C13.5827 10.4134 13.75 9.99741 13.75 9.49998C13.75 9.00254 13.5827 8.58651 13.2481 8.25188C12.9135 7.91726 12.4974 7.74995 12 7.74995C11.5026 7.74995 11.0865 7.91726 10.7519 8.25188C10.4173 8.58651 10.25 9.00254 10.25 9.49998C10.25 9.99741 10.4173 10.4134 10.7519 10.7481C11.0865 11.0827 11.5026 11.25 12 11.25Z" fill="#673DE6" />
            </g>
        </svg>
    )
}

export default Header;