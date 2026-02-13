import React from 'react'
import Cards from './components/Cards'
import DashBoard from './components/DashBoard'
import Login from "./components/Login/Login.jsx"
import Details from "./components/Details/Details.jsx";
import Signup from "./components/Signup/Signup.jsx"
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
       <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
         </Routes>
  )
}

export default App
