import React,{useContext,useEffect} from 'react'
import './Home.css'
import ecomContext from "../../context/Ecommerce"
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

export default function Home() {
  const { fetchProducts,products } = useContext(ecomContext);
  useEffect(()=>{
    fetchProducts();
    // eslint-disable-next-line
  },[])
  return (
    <>
      <div className='admin_products_container'>
      <Link to={'/admin/addproduct'}><button className='add_prod_btn'>Add Products</button></Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Catagory</th>
            <th>Image</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length>0?products.map((prod) => {
            return <ProductItem key={prod._id} prod={prod} prodId={prod._id} />
            }):<tr><td>No products</td></tr>
          }
        </tbody>
      </table>
        
    </div>   
    </>
  )
}
