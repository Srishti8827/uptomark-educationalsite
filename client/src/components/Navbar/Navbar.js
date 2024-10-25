import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import {FaBookReader} from 'react-icons/fa'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import AOS from 'aos'
function Navbar() {
    // AOS.init({
    //     duration: 800,
    //     offset:150,
    // });
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logot successfull')
      }
    return (
        <>
            <nav className="navbar" >
                <Link to='/' className='navbarlogo'><h3><FaBookReader/>Up2Mark</h3></Link>
                <ul className="leftnavbar">
                    {/* <li className="navbaritem">
                        <NavLink to="/" className="navlink" aria-current="page" id='homehead' >Home</NavLink>
                    </li> */}

                

                    <li className="navbaritem">
                        <NavLink to="/about" className="navlink" aria-current="page" >About</NavLink>
                    </li>
                    {/* <li className="navbaritem">
                        <NavLink to="#" className="navlink" aria-current="page" >All Courses</NavLink>
                    </li> */}
                    <li className="navbaritem">
                        <NavLink to="/contact" className="navlink" aria-current="page" >Contact</NavLink>
                    </li>
                    {!auth.user?(
                        <>
                        
                    <li className="navbaritem">
                        <NavLink to="/register" className="navlink " aria-current="page" >Register</NavLink>
                    </li>
                    <li className="navbaritem">
                        <NavLink to="/login" className="navlink " aria-current="page" >Login</NavLink>
                    </li>
                        </>
                    ):(
                        <>
          <li className="navbaritem">
    {auth?.user?.student === "student" ? (
        <NavLink to="/studentpage" className="navlink" aria-current="page">
            {auth?.user?.firstname}
        </NavLink>
    ) : (
        <NavLink to="/organizerpage" className="navlink" aria-current="page">
            {auth?.user?.firstname}
        </NavLink>
    )}
</li>

                    <li className="navbaritem">
                        <NavLink to="/" className="navlink "  onClick={handleLogout} aria-current="page" ><img src={require('./logout.png')} alt="" /></NavLink>
                    </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
