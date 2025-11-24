import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'
function App() {
  

  return (
    <>
      {/* <h2>Welcome online Shopping</h2> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/MainLayout' element={<MainLayout/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App