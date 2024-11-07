import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PagesNotFound/PageNotFound';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registeration from './components/Registeration/Registeration';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Sliders/Slider';
import Home from './components/Home/Home';
import Student from './components/Students/Student';
import Courses from './components/Courses/Courses';
import Front from './components/Frontpage/Front';
import Loader from './components/loader/Loader';
import Organizerpage from './components/organizerpage/Organizerpage';
import StudentPage from './components/studentpage/Studentpage';
import { useAuth } from './components/context/auth'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  const [auth, setAuth] = useAuth();
  // const handleLogout = () => {
  //     setAuth({
  //       ...auth,
  //       user: null,
  //       token: ''
  //     })
  //     localStorage.removeItem('auth')
  //     toast.success('Logot successfull')
  //   }

  return (
    <>
     {isLoading === true ? (
        <Loader />
      ) : (
    <BrowserRouter>

    <Navbar/>

   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Registeration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
   {auth?.user?.student==="student"?
      <Route path='/studentpage' element={<StudentPage/>}/> :
      <Route path='/organizerpage' element={<Organizerpage/>}/>
    }
      {/* <Route path='/navbar' element={<Navbar/>}/> */}
    <Route path='/slider' element={<Slider/>}/>
    <Route path="/footer" element={<Footer/>}/> 
     <Route path='/student' element={<Student/>}/>
     <Route path='/front' element={<Front/>}/>
     {/* <Route path='/land' element={<Landingpage/>}/> */}
     <Route path='/courses' element={<Courses/>}/>
   </Routes>

   <Footer/>
   
    </BrowserRouter>
      )}
    </>
  );
}

export default App;
