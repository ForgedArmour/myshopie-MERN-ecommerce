import React from 'react'
import './Products.css'
import star from './start.png'
export default function Products(props) {
  return (
      <div className="prod_item">
        <div className="prod_contents">
          <div className="prod_image">
            <img src={props.prod.image} alt="" />
          </div>
          <span className='prod_name'>{props.prod.name}</span>
          <div className="prod_details">
            <div className="prod_rating">
              {props.prod.rating}
              <img src={star} alt="" />
            </div>
            <div className="prod_price">
              <span>${props.prod.price}</span>
            </div>
            <div className="add_cart_btn">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
  )
}
