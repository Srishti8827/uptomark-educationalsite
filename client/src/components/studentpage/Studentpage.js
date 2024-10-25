import React from "react";
import Slider from '../Sliders/Slider'
import Landingpage from '../Courses/Courses'
import Student from '../Students/Student'
import Front from '../Frontpage/Front'
import About from '../About/About'
function StudentPage(){
    return(
        <>
            <Front/> 
        <Landingpage/> 
        <div className="deco"> 
        <About/>

        </div> 
        <Student/> 
        <Slider/> 
        </>
    )
}
export default StudentPage;