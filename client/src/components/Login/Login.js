import React, { useState } from 'react'
import { useAuth } from '../context/auth'
import './login.css'
// import toast from 'react-hot-toast'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import axios from 'axios'
import {  NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registeration from '../Registeration/Registeration.js'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [student,setStudent]=useState("");
    const [auth,setAuth]=useAuth();
    // const location=useLocation();
    const navigate = useNavigate("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/login`,
                {email, password}
            );
            console.log("fds");
            console.log(res)
            if ( res.data.success) {
                
                toast.success(res.data.message);
                console.log(res.data.user.student)
                const role=res.data.user.student
               role === "student" ?(navigate('/studentpage')):
                    navigate('/organizerpage')
               
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                });
                localStorage.setItem("auth",JSON.stringify(res.data));
            }
            else {
            
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Invalid user or password");
        }
    }
    return (
        <>
            <div className='loginbody'>
                     
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container">
                            <h2> Login Form</h2>
                        </div>
                        <div className="row clearfix">
                            <div >
                                <form onSubmit={handleSubmit}>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /><AiOutlineMail/></span>
                                        <input type="email" name="email" placeholder="Email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                           required
                                           autoComplete="current-password"
                                            />
                                    </div>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /><RiLockPasswordLine/></span>
                                        <input type="password" name="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" required
                                        autoComplete="current-password" />
                                    </div>
                                    {/* <div className="input_field">
                                        <input type="string" name="student" placeholder="student or organizer"
                                          value={student}
                                          onChange={(e) => setStudent(e.target.value)}
                                           required
                                           autoComplete="current-password"
                                            />
                                    </div> */}
                                
                                    <input className="button" type="submit" defaultValue="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                <span>Not register   </span>
                <NavLink to="/register"  aria-current="page" >Sign up</NavLink>
                </div>
                
            </div>
            <ToastContainer />
        </>
    )
}

export default Login
