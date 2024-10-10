import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as React from 'react';
import './App.css';
import Login from './componets/Login'
 import Signup from './componets/Signup'
 import {Routes, Route} from 'react-router-dom'
import { SignalCellular2BarSharp } from '@mui/icons-material'
import Homepage from './componets/Homepage';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div class name="App">
      
      <Routes>
         <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/> 
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/nav' element={<Navbar/>}/>

        </Routes>
        
      </div>
  )
}

export default App;
