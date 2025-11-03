import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './componenets/profile.jsx'

function App() {
  const student={
    pic:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name:'John Doe',
    age:' 21',
    course:'Computer Science',
    year:'3rd',
    university:'ABC University'

  }


  return (
    // <div className='container'>
    //  <h2>welcome, to react app</h2>
    //  <div>
    //   <h2 style={{color:"cyan"}}>welcome to my profile

    //   </h2>
    //  </div>
    // </div>
    <div>
      <Student data={student}/>
    </div>
  )
}

export default App;