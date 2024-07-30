import React from 'react'
import { useTheme } from './ThemeContext'

export default function Eighteen() {
    const {isDark, toggle} = useTheme();

  return (
    <div>
        <label>
            <input type="checkbox" checked={isDark} onChange={toggle}/>
            Dark Mode
        </label>
    </div>
  )
}
