import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();

  const loggedInUser = location.state?.userData;
  console.log(loggedInUser);


  
  return (
    <div className='pt-25 text-xl text-center flex flex-col gap-5 justify-center'>
      <div>
          Welocome <p className='text-blue-600'>{(loggedInUser.name).toUpperCase()}</p>
      </div>
    
      <div className='flex items-center justify-center rounded-2xl '>
        <form  className='flex flex-col justify-center items-baseline gap-3 bg-gray-500 p-5 rounded-xl'>
          
             <label htmlFor="name">Name</label>
          <input  className='bg-gray-300 rounded p-2 outline-none ' type="text" name='name' id='name' placeholder='name' value={loggedInUser.name} onChange={handleChange}/>
          
         
          <label htmlFor="email">Email</label>
          <input className='bg-gray-300 rounded p-2 outline-none ' type="email" name='email' id='email' placeholder='email' value={loggedInUser.email} onChange={handleChange}/>

          <label htmlFor="password">Password</label>
          <input className='bg-gray-300 rounded p-2 outline-none ' type="password" placeholder='••••••••' value={loggedInUser.password} onChange={handleChange}/>

          <button className='bg-blue-500 p-2 rounded-2xl'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
