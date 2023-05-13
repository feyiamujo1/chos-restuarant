import React, {useEffect} from 'react';
import "./app.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';



function App() {

  useEffect(() => {
   alert('Welcome to Group76 Capstone Project!')
    }
  , [])
  
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
