import React, { useState } from 'react'
import ecomContext from './Ecommerce'
import axios from 'axios'

export default function EcomStates(props) {
    const host = `https://shopieecom.herokuapp.com/api`
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
    const [products,setProducts] = useState([])
    const [isAdmin,setIsAdmin] = useState(localStorage.getItem("admin")==="true" ? true : false)
    const [progress,setProgress] = useState(0);
    const addProduct = async(prod,image)=>{
        prod.image = image
        const res = await axios.post(`${host}/addproduct`, prod,{
            headers:{
                auth_token:localStorage.getItem("token")
            }
        })
        setProgress(100)
        if (res.data.status === "ok") {
            setProducts((prev)=>[res.data.product,...prev])
        }
        else{
            console.log(res.data.message);
        }
    }
    const fetchProducts = async()=>{
        const res = await axios.get(`${host}/getproducts`)
        console.log(res.data);
        setProducts(res.data.products)
    }   
    const signup = async (username, email, password,role) => {
        // setProgress(10)
        const res = await axios.post(`${host}/signup`, { username, email, password })
        // setProgress(100)
        if (res.data.status === "ok") {
            return 0;
        }
        else{
            // setAlert({msg:res.data.message,active:true})
            console.log(res.data.message);
        }
        return 1;
    }
    const login = async (email, password) => {
        const res = await axios.post(`${host}/signin`, { email, password })
        if (res.data.status === "ok") {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("user", res.data.user._id);
            if(res.data.admin){
                localStorage.setItem("admin", res.data.admin);
                setIsAdmin(true)
            }
            setIsLogin(true);
            console.log(res.data);
        }
        else{
            // setAlert({msg:res.data.message,active:true});
            console.log(res.data.message);
        }
    }

    const qstnValues = {
        login,signup,isLogin,fetchProducts,products,setIsLogin,isAdmin,addProduct,progress,setProgress
    }
    return (
        <ecomContext.Provider value={qstnValues}>
            {props.children}
        </ecomContext.Provider>
    )
}
