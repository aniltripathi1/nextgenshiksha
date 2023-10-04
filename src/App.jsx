 import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Home from './components/home/Home';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import Schemes from './components/schemes/Schemes';
import Skill from './components/skills/Skill';
import Job from './components/job/Job';



const App = () => {
  return(

      <>
    
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/news" element={<News />} />
<Route path="/newsletter" element={<Newsletter />} />
<Route path="/schemes" element={<Schemes />} />
<Route path='/footer' element = {<Footer/>} />
<Route path='/skill' element = {<Skill/>} />
<Route path="/job" element = {<Job/>} />
<Route path="/register" element={<Signup />} />
      </Routes>
         </>
        
      )
}

export default App;

