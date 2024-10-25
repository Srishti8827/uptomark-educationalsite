import React from 'react'
import './about.css'
import AOS from 'aos'

function About() {
    AOS.init({
        duration: 800,
        offset:150,
    });
    return (
        <>
            <div className="containerabout">
                <div className='aboutimage' >
                    <img id="image1"src={require('./groupphotot.jpeg')} alt="photo" />
                </div>
                <div className="contentabout" data-aos="zoom-in"data-aos-delay="300">
                 
                    <h1 className='abouttitle'>About Us</h1>

                    <p className='textpara'>We are the organisation aim to provide quality education at lowest price in our own city Pipariya, MP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit optio, veniam nam deleniti facere obcaecati libero consequuntur vitae quos voluptatibus dolorum ipsum. Quidem, dolore aspernatur. Consequatur repudiandae labore architecto!</p>
                </div>
                {/* <div className="aboutimage" >
                    <img id="image2" src={require('./book2.jpeg')} alt="photo" />
                </div> */}
            </div>
        </>
    )
}

export default About
