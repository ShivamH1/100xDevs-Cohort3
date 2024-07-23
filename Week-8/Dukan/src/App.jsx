import React from 'react'
import './App.css'
import Revenue from './components/Revenue'

function App() {

  return (
    <div className='grid grid-cols-4'>
      <Revenue title={"Amount Pending"} amount={"93,234.515"} orders={13}></Revenue>
    </div>
  )
}

export default App
