import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from '../Routes/Contact';
import Home from '../Routes/Home';
import About from '../Routes/About';

export default function Ten() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
