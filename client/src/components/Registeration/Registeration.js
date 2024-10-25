import React, { useState } from 'react'
// import './registeration.css'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FaRegAddressCard } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';  // Ensure this is imported
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registeration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [student, setStudent] = useState(""); // changed name
    const navigate = useNavigate(); // Removed empty string

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                { email, password, phone, address, firstname, lastname, student }
            );
            console.log("request sent");
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Fill correct entry");
        }
    }

    return (
        <>
            <div className='regbody'>
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container">
                            <h2>Registration Form</h2>
                        </div>
                        <div className="row clearfix">
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="input_field">
                                        <span><AiOutlineMail /></span>
                                        <input type="email" name="email" placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div className="input_field">
                                        <span><RiLockPasswordLine /></span>
                                        <input type="password" name="password" placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    <div className="input_field">
                                        <span><BsTelephone /></span>
                                        <input type="phone" name="phone" placeholder="Phone no"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required />
                                    </div>
                                    <div className="input_field">
                                        <span><FaRegAddressCard /></span>
                                        <input type="text" name="address" placeholder="Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required />
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col_half">
                                            <div className="input_field">
                                                <input type="text" name="firstname" placeholder="First Name"
                                                    value={firstname}
                                                    onChange={(e) => setFirstname(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col_half">
                                            <div className="input_field">
                                                <input type="text" name="lastname" placeholder="Last Name"
                                                    value={lastname}
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='studentornot'>
                                        <p>Are you a student or organizer?</p>
                                        <input type="text" name="student" placeholder="Enter 'student' or 'organizer'"
                                            value={student}
                                            onChange={(e) => setStudent(e.target.value)}
                                            required />
                                    </div>

                                    <div className="input_field checkbox_option">
                                        <input type="checkbox" id="cb1" required />
                                        <label htmlFor="cb1">I agree with terms and conditions</label>
                                    </div>

                                    <input className="button" type="submit" value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Registeration;
