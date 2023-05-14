// // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../styles/App.css'
import { Header } from './Header.tsx'
import { Body } from './Body.tsx'
import { Footer } from './Footer.tsx'
import { Notification } from './Notifications.tsx'
import { CourseList } from './CourseList.tsx'

function App({isLoggedIn = false}) {

  return (
    <>
      <Notification displayDrawer={false}/>
      <Header />
      {isLoggedIn? <CourseList /> : <Body />}
      <Footer />
    </>
  )
}

export default App
