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

                    <p className='textpara'>We are an organization dedicated to providing quality courses at the lowest prices. As a student, you can access thousands of courses across various subjects. If you're an event organizer, you can also contribute by registering as an organizer and posting your personalized course, reaching thousands of students. Our platform connects learners with valuable resources and empowers educators to share their expertise.</p>
                </div>
                {/* <div className="aboutimage" >
                    <img id="image2" src={require('./book2.jpeg')} alt="photo" />
                </div> */}
            </div>
        </>
    )
}

export default About
