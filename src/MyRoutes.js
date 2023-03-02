import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Layouts/>}>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
           </Route>
        </Routes>

    </Router>
  )
}

export default MyRoutes