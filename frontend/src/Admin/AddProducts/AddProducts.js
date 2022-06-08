import React, { useState,useContext } from 'react'
import './AddProducts.css'
import ecomContext from "../../context/Ecommerce"
import { useNavigate } from 'react-router-dom';
import {getDownloadURL,uploadBytesResumable,ref,getStorage} from 'firebase/storage'
import app from '../../FIrebase/firebase'

export default function AddProducts() {
    const [fileup,setFileup] = useState(null);
    let navigate = useNavigate()
    const [proddetail,setProdDetail] = useState({})
    const { addProduct } = useContext(ecomContext);
    
    const handleSubmitProd = async (e)=>{
        e.preventDefault();
        if(proddetail.name && proddetail.description && proddetail.price && proddetail.rating && fileup!==null)
        {
            const filename = new Date().getTime() + fileup.name
            const storage = getStorage(app)
            const storageRef = ref(storage,filename)
            const uploadTask = uploadBytesResumable(storageRef, fileup);

            uploadTask.on('state_changed', {
            next: (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload progress ",progress," %");
            },
            complete:()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    addProduct(proddetail,downloadURL);
                    navigate("/admin")

                });
            }
            }
            );
            
    
          
        }
      }
      const handleFormChange = (e)=>{
        setProdDetail({
          ...proddetail,
          [e.target.name]:e.target.name==="price"?parseInt(e.target.value):e.target.value
        })
      }
    const handleFileChange = (e)=>{
        setFileup(e.target.files[0])
    }
  return (
    <>
        <div className="addproduct_container">
            <span>Add Product</span>
            <div className="addprod_form">
                <form action="#">
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={handleFormChange} name="name" />
                    <label htmlFor="">Description</label>
                    <textarea rows={5} onChange={handleFormChange} name="description" />
                    <label htmlFor="">Price</label>
                    <input type="text" onChange={handleFormChange} name="price" />
                    <label htmlFor="">Rating</label>
                    <input type="text" onChange={handleFormChange} name="rating" />
                    <label htmlFor="">Image</label>
                    <input type="file" onChange={handleFileChange} />
                </form>
                <button className='addprod_submit_btn' onClick={handleSubmitProd}>Add</button>
            </div>
        </div>
    </>
  )
}
