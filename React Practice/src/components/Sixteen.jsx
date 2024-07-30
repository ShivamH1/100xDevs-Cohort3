import React, { useState } from 'react'

export default function Sixteen() {
  const [selectedColor, setSelectedColor] = useState('#0000');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  }

  return (
    <div>
      <input type='color' onChange={handleChange}/>
      <div style={{width : '100px', height : '100px', backgroundColor : selectedColor}}></div>
    </div>
  )
}
