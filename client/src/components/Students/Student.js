import React from 'react'
import './Student.css'
import AOS from 'aos'
const Student = () => {
  AOS.init({
    duration: 800,
    offset:150,
});
  return (
    <>
      <div className="headline">

<p className='landingp' >HEART'S</p>
  <h1 className='landingheading'>Our Successful Students</h1>
</div>

      <div className='student-container'>
            <div className="card-student">
                <img data-aos='zoom-in' data-aos-delay="300" className='studentimg' src={require('./dummymen.jpeg')} alt="" />
                <div className="cardbody">
                    <h2 className="studentname">Ratan</h2>
                    <p className="studentdis">CodeingUp Winner<p>Lorem ipsum dol</p></p>
                </div>
              
            </div>
            <div className="card-student">
                
                <img className='studentimg' data-aos='zoom-in' data-aos-delay="300" src={require('./dummymen.jpeg')} alt="" />
                <div className="cardbody">
                    <h2 className="studentname">Suraj Singh</h2>
                    <p className="studentdis">JEE Mains Rank 182<p>Lorem ipsum dol </p></p>
                </div>
            </div>
            <div className="card-student">
                <img className='studentimg' data-aos='zoom-in' data-aos-delay="300" src={require('./dummywomen.jpeg')} alt="" />
                <div className="cardbody">
                    <h2 className="studentname">Riya Rai</h2>
                    <p className="studentdis">NEET Topper
                    <p>Lorem ipsum dol </p></p>
                </div>
            </div>
            <div className="card-student">
                <img className='studentimg'data-aos='zoom-in' data-aos-delay="300" src={require('./dummymen.jpeg')} alt="" />
                <div className="cardbody">
                    <h2 className="studentname">Adesh</h2>
                    <p className="studentdis">Lorem Winner<p>Lorem ipsum dol </p></p>
                </div>
            </div>
            <div className="card-student">
                <img className='studentimg' data-aos='zoom-in' data-aos-delay="300" src={require('./dummywomen.jpeg')} alt="" />
                <div className="cardbody">
                    <h2 className="studentname">Hina Raj</h2>
                    <p className="studentdis">JEE Mains Rank 342<p>Lorem ipsum dol </p></p>
                </div>
            </div>
      </div>
    </>
  )
}

export default Student
