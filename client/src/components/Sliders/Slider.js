import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"
import AOS from 'aos'

function Slider() {
    AOS.init({
        duration: 800,
        offset:150,
    });
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
    <>
            <div className="headline">

<p className='landingp' >OUR FACULTY STAFF</p>
  <h1 className='landingfacultyheading'>Best teaching staff</h1>
</div>
            <div className='sliderarea' >
                
                <Carousel responsive={responsive}
               pauseOnHover={false}
                autoPlay={true}
                showDots={true}
                autoPlaySpeed={3000}
                infinite={true}>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='facultyheading'>Sanjeev Jain</h2>
                            <p className='content'>As the Head of Math, I am thrilled to be part of an organization that is committed to providing high-quality education at an affordable price. Our platform gives students access to a vast array of math courses. </p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='facultyheading'>Riya Rai</h2>
                            <p className='content'>As a DBMS instructor, I am proud to be part of a platform that offers students the opportunity to learn essential database management skills at an affordable price. Our courses cover everything from basic database design.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card" data-aos="zoom-in" >
                            <h2 className='facultyheading'>Veenita Mehta</h2>
                            <p className='content'> I am delighted to be a part of a platform that makes quality education accessible to students everywhere. Our English courses focus on improving reading comprehension, writing skills, and critical thinking. </p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='facultyheading'>Jiya Jay</h2>
                            <p className='content'>Through interactive lessons and practical applications, we encourage students to explore the fascinating world of biology.This platform connects students with the resources they need to understand complex biological concepts.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='facultyheading'>Harry Loie</h2>
                            <p className='content'> I am delighted to be a part of a platform that makes quality education accessible to students everywhere. Our English courses focus on improving reading comprehension, writing skills, and critical thinking.</p>
                        </div>
                    </div>

                </Carousel>;
                </div >
            </>
            )
}

            export default Slider
