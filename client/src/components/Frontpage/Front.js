import React from 'react'
import './Front.css'
import AOS from 'aos'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/auth'

const Front = () => {
  AOS.init({
    duration: 800,
    offset:150,
});
const [auth, setAuth] = useAuth();
const handleClick=()=> {
  console.log(auth?.user)
  if (auth?.user!== null) {
    window.location.href = "#courses";  // Navigate to courses
  } else {
    console.log("toast message ");
    toast.info("login first");    // Show error message
  }
}

  return (
    <>
    <div className='mainfront'>
      
    <div className='frontbody'>
      <h1 className='frontheading'data-aos="slide-right" >Best Online Education <p>Expertise </p></h1>
      <p className="subhead" data-aos="slide-right" data-aos-delay="300">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <button className='front_button' onClick={handleClick} >VIEW COURCES</button>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Front
