import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'
import { ToastContainer } from 'react-toastify';


function Home() {
   const [uploadVideoStatus, setUploadVideoStatus] = useState({})

  return (
    <>
      {/* first section */}
      <div className='container d-flex align-items-center mt-5 justify-content-between'>
        <Add  setUploadVideoStatus={setUploadVideoStatus}/>
        <Link style={{ textDecoration: 'none' }} to={'/watch'}>
          <span className='fs-4 fw-bold textStyle'>WATCH HISTORY <i class="fa-solid fa-clock"></i></span>
        </Link>
      </div>
      {/* second section */}
      <div className='container-fluid mt-5 w-100 mb-5'>
        <div className='row'>
          <div className='col-md-9 textStyle'>
            <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className='col-md-3 textStyle'>
            <Category/>
          </div>
        </div>
      </div>
      <ToastContainer 
       position="top-center"
       autoClose={3000}
       pauseOnHover
       theme="colored"
       />
    </>
  )
}

export default Home