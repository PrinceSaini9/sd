import React, { useState ,useEffect} from "react";
import "./CoursesSection.css";
import { useMyContext } from "../../Context/Context";


const CoursesSection = () => {
    const { data, loading } = useMyContext();

    const [uniqueCourses, setUniqueCourses] = useState([]);
    const [activeCourse, setActiveCourse] = useState("All");
    const [courseCard,setCourseCard] = useState([]);
  
    useEffect(() => {
      if (!loading) {
        console.log(data.data);
        setCourseCard(data.data);
        setUniqueCourses([...new Set(data.data.map(item => item.category.title))]);
      }
    }, [loading, data.data]);
  
    const courses = ['All', ...uniqueCourses];
  
    
  
    const handleToggle = (course) => {
        setActiveCourse(course === activeCourse ? null : course);
    };
    return (
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
                    courseCard.filter((item) => (activeCourse === "All" ? true : item.category.title === activeCourse))
                    .map((item)  => (
                        <div className="coursecard" >
                            <img src={item.banner} alt="" />
                            <div className="coursecardtitle">{item.batchName}</div>
                            <div className="coursecarddesc">{item.batchSlug}</div>
                            <div className="coursecardtime"> <Timesvg /> {item.duration} Weeks</div>
                            <div className="enrollbtn">Enroll For Free</div>
                        </div>
                    ))
                }
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
export default CoursesSection;