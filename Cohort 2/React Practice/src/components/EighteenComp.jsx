import React from 'react'
import { useTheme } from './ThemeContext'
import '../styles/Eighteen.css'

export default function EighteenComp() {
    const {isDark} = useTheme();
    const themeClass = isDark ? 'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
        <p>This component uses selected theme</p>
    </div>
  )
}
