import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Members from './components/Members'
import HacktoberfestReg from './components/HacktoberfestReg'


const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/hacktoberfestregis' element={<HacktoberfestReg />}></Route>
      <Route path='/members' element={<Members />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      <Route path='/contactus' element={<ContactUs />}></Route>
    </Routes>
  )
}

export default App ;