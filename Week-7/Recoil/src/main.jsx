import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import AsyncQ from './AsyncQ.jsx'
// import Todos from './Todo.jsx'
// import SelectorFam from './SelectorFam.jsx'
import Loadable from './Loadable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AsyncQ /> */}
    {/* <Todos /> */}
    {/* <SelectorFam /> */}
    <Loadable />
  </React.StrictMode>,
)
