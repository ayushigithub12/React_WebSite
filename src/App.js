import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App=()=>{
return (
  <>
  <Navbar/>
  <Routes>
  <Route exact path='/' Component={Home}/>
  <Route exact path='/about' Component={About}/>
  <Route exact path='/service' Component={Service}/>
  <Route exact path='/contact' Component={Contact}/>
  </Routes>
  
  <Footer/>
  </>
)
}
export default App;