import React from 'react'
import { Link } from 'react-router-dom'
import './pagenotfound.css'
function PageNotFound() {
  return (
    <>
       <div className='pnf'>
      
            <h1 className="pnf-title">404</h1>
            <img className='imgnotfound' src={require('./emojised.jpeg')} alt="" />
            <h2 className="pnf-heading">Oops!</h2>
            <h2 className="pnf-heading">Looking For Something That Dosen't Exist..</h2>
            <Link to="/" className='pnf-btn'>
              Go back..
            </Link>
            
        </div>
    </>
  )
}

export default PageNotFound
