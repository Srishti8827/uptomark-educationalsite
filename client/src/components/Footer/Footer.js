import React from 'react'
import './footer.css'
import "aos/dist/aos.css";
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import AOS from 'aos';
function Footer() {
    AOS.init({
        duration: 800,
        offset:150,
    });
  return (
    <>
     <div className='footer'  > 
        <div className="part1footer"data-aos="fade-in" >
            <h1 className="footerheading">
                Up2Mark
            </h1>
            <p className="textfooter">
                <div className='subheadingfooter'>Copyright <AiOutlineCopyrightCircle/> Up2Mark</div>
                <div  className='subheadingfooter'>All rights are reserved</div>
            </p>
        </div>
        <div className="part2footer"data-aos="fade-in">
        <h1 className="footerheading">
               Facilities available 
            </h1>
            <div  className='subheadingfooter'>Pipariya -Main Branch</div>
            <div  className='subheadingfooter'>Itarsi</div>
            <div  className='subheadingfooter'>Bhopal</div>
        </div>
        <div className="part2footer"data-aos="fade-in">
        <h1 className="footerheading">
               Follow us on 
            </h1>
            <div  className='subheadingfooter'><img src={require('./instagram.png')} className="iconimage" alt=""/>Instagram</div>
            <div  className='subheadingfooter'><img src={require('./linkedin.png')} className="iconimage" alt=""/>Linkedin</div>
            <div  className='subheadingfooter'><img src={require('./facebook.png')} className="iconimage" alt=""/>FaceBook</div>
            {/* <div  className='subheadingfooter'><img src={require('./twitter.png')} className="iconimage" alt=""/>Twitter</div> */}
        </div>
    </div> 
    </>
  )
}

export default Footer
