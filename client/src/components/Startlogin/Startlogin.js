import React from "react";
import './startlogin.css'
import { Link, NavLink } from 'react-router-dom'
const Startlogin=()=>{
return (
    <>
        
        <div className="startlogincontainer">
            <div className="cardlogin" id="organizer">
                <h1>For Organizers</h1>
                <p>Host your own course and reach out millions of students all over world

                </p>
                <NavLink to="/login" className="loginbutton "id="organizer-login" aria-current="page"  >login</NavLink>
                {/* <button onClick={NavLink to="/"}>login</button> */}
                <p>Don't have account?</p>
                <NavLink to="/register" className="signupbutton "id="organizer-signup" aria-current="page"  >sign-up</NavLink>
            </div>
            <div className="cardlogin" id="students">
                <h1>For Students</h1>
                <p>Join over 20 million courses available from different organization</p>
                <NavLink to="/login" className="loginbutton "id="student-login" aria-current="page"  >login</NavLink>
                <p>Don't have account?</p>
                {/* <button>sign up</button> */}
                <NavLink to="/register" className="signupbutton "id="organizer-signup" aria-current="page"  >sign-up</NavLink>
            </div>
        </div>
    </>
)
}
export default Startlogin