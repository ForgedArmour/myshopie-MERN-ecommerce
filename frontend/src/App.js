import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import HomeAdmin from './Admin/HomeAdmin/Home'
import Navbar from './Navbar/Navbar';
import Login from './Registration/Login';
import Signup from './Registration/Signup';
import ecomContext from "./context/Ecommerce"
import React, { useContext } from 'react'
import AddProducts from './Admin/AddProducts/AddProducts';
import LoadingBar from 'react-top-loading-bar'
function App() {
  const { isAdmin,progress } = useContext(ecomContext);
  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={2.73}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        {isAdmin && <Route path="/admin" element={<HomeAdmin /> } />}
        {isAdmin && <Route path="/admin/addproduct" element={<AddProducts /> } />}
      </Routes>
    </Router>
  );
}

export default App;
