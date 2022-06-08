import React from 'react'

export default function ProductItem(props) {
  return (
    <>
        <tr className='admin_prod_item'>
            <td>{props.prod.name}</td>
            <td>${props.prod.price}</td>
            <td>Tshirt</td>
            <td><img src={props.prod.image} alt="" /></td>
            <td className='admin_prod_btns'><button>Edit</button><button>Delete</button></td>
        </tr>
    </>
  )
}
