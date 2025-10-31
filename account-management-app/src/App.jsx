import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<LoginPage></LoginPage>}/>
        <Route path='/registration' element={<RegistrationPage></RegistrationPage>}/>
        <Route path='/profile' element={<ProfilePage></ProfilePage>}/>
      </Routes>
    </div>
  )
}

export default App
