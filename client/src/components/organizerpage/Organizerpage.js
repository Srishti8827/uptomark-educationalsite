import React from "react";
import Addcourse from "./Addcourse"
import Slider from '../Sliders/Slider'
import Landingpage from '../Courses/Courses'
import Student from '../Students/Student'
import Front from '../Frontpage/Front'
import About from '../About/About'
function Organizerpage(){
    return(
        <>
        {/* <Front/>  */}
        <Addcourse/>
        <p>Cources avaliable now are</p>
        <Landingpage/> 
        <div className="deco"> 
        <About/>

        </div> 
        <Student/> 
        <Slider/>  
        </>
    )
}
export default Organizerpage;