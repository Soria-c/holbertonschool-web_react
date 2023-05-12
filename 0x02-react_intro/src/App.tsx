// // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import holbertonLogo from './assets/holbertonlogo.jpg'

function App() {

  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' style={{display: "block"}}/>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' style={{display: "block"}} />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  )
}

export default App
