import React, { useEffect,useContext } from 'react'
import ecomContext from "../context/Ecommerce"
import Products from './Products';

export default function FetchProducts() {
    const { fetchProducts,products } = useContext(ecomContext);
    useEffect(()=>{
        fetchProducts();
        // eslint-disable-next-line
    },[])
  return (
    <>
    <div className="prod_main_container">
    <div className='products_container'>
        {
            products.length>0?products.map((prod) => {
                return <Products key={prod._id} prod={prod} prodId={prod._id} />
            }):<div className='no_questions'>No Questions</div>
        }
    </div>
    </div>
    </>
  )
}
