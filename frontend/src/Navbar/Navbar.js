import React,{ useContext } from 'react'
import './Navbar.css'
import logo from './logo.png'
import cart from './cart.png'
import { Link } from 'react-router-dom'
import ecomContext from "../context/Ecommerce"

export default function Navbar() {
  const { isLogin,setIsLogin } = useContext(ecomContext);
  const handleLogout = ()=>{
    setIsLogin(false)
    localStorage.clear("token");
  }
  return (
    <div className='Navbar_main'>
        <div className="nav_contents">
          <div className="left_nav">
            <Link to={'/'}><div className="logo">
                <img src={logo} alt="" />
                <span>MyShopie</span>
            </div></Link>
          </div>
          <div className="right_nav">
              {!isLogin && <><Link to={'/signup'}><span>Register</span></Link>
              <Link to={'/login'}><span>Login</span></Link></>}
              {isLogin && <><Link to={'/admin'} onClick={handleLogout}><span>Admin</span></Link><Link to={'/'} onClick={handleLogout}><span>Logout</span></Link></>}
            <div className="shoping_cart">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
