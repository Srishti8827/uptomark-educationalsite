import React, { useState } from 'react'
import './Contact.css'
import AOS from 'aos'
import axios from 'axios'
// import {useNavigate,useLocation} from 'react-router-dom'
import toast from 'react-hot-toast'

function Contact() {
  AOS.init({
    duration:800,
    offset:150,
  })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/contact`,
        {  name,email, phone, message }
      );
      setFormData("");
      if (res.data.success) {
        toast.success("Message sent successfully. Refresh to see changes.");
       
      }
      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <>
    <div className="container-contact">
      <div className="imagecontainer" data-aos='flip-left' data-aos-delay="300">
        <img className='imgcontact' src={require('./StudioAnimwood.png')} alt="" />
      </div>
      <div data-aos='zoom-in' data-aos-delay="300"className="content">
          <h1>CONTACT US</h1>
          <h4>For any query send your message to us...</h4>
          <form  onSubmit={handleSubmit}>
            <div className="group">
              <input type="text" placeholder='Enter Your Name' className='grouptext' 
               value={name}
               onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="group">
              <input type="email" placeholder='Enter Your Email'  value={email}
             onChange={(e) => setEmail(e.target.value)} className='groupemail' />
            </div>
            <div className="group">
              <input type="number" placeholder='Enter Your Phone no' value={phone}
                                         onChange={(e) => setPhone(e.target.value)} className='groupphone' />
            </div>
            <div className="group">
              <textarea placeholder='Message...' id="" cols="30" rows="10"  value={message}
                                         onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type='submit' className='btn'>Send</button>
          </form>

      </div>
    </div>

    </>
  )
}

export default Contact
