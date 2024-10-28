import React, { useState } from 'react'
//  import './registeration.css'
import axios from 'axios'
import { resolvePath, useNavigate } from 'react-router-dom'

import './addcourse.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/auth'

function Registeration() {
    const [auth, setAuth] = useAuth();
    const [subject, setSubject] = useState("");
    const [details, setDetails] = useState("");
    const [photo, setPhoto] = useState("");
   
    const navigate = useNavigate("");

    // form function
    const handleSubmit1 = async (e) => {
        e.preventDefault();
       
        try {
            if( auth?.user?.student!=="organizer"){
                toast.error("please login")
            }
            else{
                const res = await axios.post(
                    `${process.env.REACT_APP_API}/api/v1/auth/addevent`,
                    { subject,details,photo }
                );
                console.log("requestsent");
                if (res.data.success ) {
                    toast.success(res.data.message);
                    window.location.reload();

                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <div className='regbody'>
                        <div className="titlecontainer">
                            <h2>Add Course/Event</h2>
                        </div>
                <div className="addform">
                    <div >
                        <div >
                            <div>
                                <form onSubmit={handleSubmit1}>
                                    <div className="inputfield1">
                                       
                                        <input type="text" name="subject" placeholder="course/event"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required />
                                    </div>
                                    <div className="inputfield1">
                                       
                                        <input type="text" name="details" placeholder="details of course"
                                            value={details}
                                            onChange={(e) => setDetails(e.target.value)}
                                            required />
                                    </div>
                                    <div className="inputfield1">
                                       
                                        <input type="file" name="photo" placeholder="photo url"
                                            value={photo}
                                            onChange={(e) => setPhoto(e.target.value)}
                                            required />
                                    </div>
                                    <input className="button" type="submit" value="Add" />
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

export default Registeration
