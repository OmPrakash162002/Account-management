import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate();

  const[isLogedIn, setIsLogedIn] = useState(true);

    const handleButtonClick = ()=>{
       if(isLogedIn){
        navigate('/login');
        setIsLogedIn(false);
       }else{
        navigate('/registration')
        setIsLogedIn(true);
       }
    }

  return (
    <div className='flex flex-row justify-between fixed top-0 right-0 left-0 bg-gradient-to-l from-blue-200 to-blue-900 p-5 backdrop-blur-2xl bg-transparent px-10'>
      <div className='text-xl '>/Account Management application/</div>
      <button onClick={handleButtonClick} className='bg-gradient-to-bl from-red-500 to-blue-400 rounded-full p-2 bg-blue-600 text-black'>{isLogedIn ? 'LOGIN':'REGESTER'}</button>
    </div>
  )
}

export default Navbar
