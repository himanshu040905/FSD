import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"
import Dashboard from "./components/Dashboard.jsx"
import MainLayout from "./components/MainLayout.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MainLayout" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App