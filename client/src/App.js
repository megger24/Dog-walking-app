
import { Routes, Route, } from 'react-router-dom'
import LoginPage from './views/loginPage.jsx'
import authAPI from './API/authAPI.js'
import './App.css'
import RegisterPage from './views/RegisterPage.jsx'
import NavBar from "./components/NavBar.jsx";
// import PublicRoutes from "./components/PublicRoutes.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import Private from "./views/Private.jsx";
import HomePage from './views/HomePage.jsx'
import { useEffect, useState } from 'react';
import Packages from './views/packagesPage.jsx'
import Checkout from './views/checkoutPage.jsx'
import WalkerPage from './views/WalkerPage.jsx'
import ThankYou from './components/ThankYou.jsx'


const App = (props) => {
const [bookWalker, setBookWalker] = useState({})
console.log(bookWalker)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      authAPI.validateAuth()
    }

  }, [])

  return (
    <div className="app">
      <div className="background"></div>
      <Routes>
          <Route element={<NavBar />}>

           <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
         
          <Route path='/packages' element={<Packages />} />
          <Route path='/checkout' element={<Checkout/>} /> 
        <Route element={<PrivateRoutes />}>
            <Route path='/private' element={<Private setBookWalker={setBookWalker}/>} />
            <Route path='/WalkerPage' element={<WalkerPage bookWalker={bookWalker}/>} />
            <Route path='/ThankYou' element={<ThankYou/>} />
          </Route>
        </Route>
      </Routes>




    </div>
  )
}
export default App
