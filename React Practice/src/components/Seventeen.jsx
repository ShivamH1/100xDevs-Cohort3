import React from 'react'
import '../styles/Seventeen.css'
import { useState } from 'react'

export default function Seventeen() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
            =
        </button>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
        </ul>
    </div>
  )
}
