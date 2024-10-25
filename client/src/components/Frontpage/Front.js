import React from 'react'
import './Front.css'
import AOS from 'aos'

const Front = () => {
  AOS.init({
    duration: 800,
    offset:150,
});
  return (
    <>
    <div className='mainfront'>
      
    <div className='frontbody'>
      <h1 className='frontheading'data-aos="slide-right" >Best Online Education <p>Expertise </p></h1>
      <p className="subhead" data-aos="slide-right" data-aos-delay="300">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <button className='front_button' ><a href="#courses" >VIEW COURCES</a></button>
    </div>
    </div>
    
    </>
  )
}

export default Front
