import React, { useState, useEffect } from 'react';
import './courses.css';
import AOS from 'aos';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Landingpage = () => {
  // Initialize AOS inside useEffect
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
    });
  }, []);

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API // Ensure this environment variable is set correctly
      // console.log(`${process.env.REACT_APP_API}/api/v1/auth/events`);
      try {
        const response = await axios.get(`${url}/api/v1/auth/events`);
        // console.log(response)
        setMembers(response.data.data);
        // console.log(typeof(members[0].photo)); // should log true console.log(members);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      // console.log
    };

    fetchData();
  }, []);

  const eventsList = members.map((member) => (
    <div className="landcard" key={member.id}>
      <div className="landcardimgs">
      <img src="https://drive.google.com/uc?id=1CnaTpVbnD7k0svzVqgSecfx4kjLH9iaP" />

      </div>
      <div className="landcardtitle">
        <h2>{member.subject}</h2>
      </div>
      <div className="landcarddetail">
        <p>{member.details}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="headline">
        <p className="landingp" id="courses">OUR COURSES</p>
        <h1 className="landingheading">Explore Our Popular Online Courses</h1>
      </div>

      <div className="landcardcontainer">
        {eventsList}
      </div>
    </>
  );
};

export default Landingpage;
