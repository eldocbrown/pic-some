import React from 'react'

import '../css/CartItem.css'

function CartItem({item, removeItemFromCart}) {

  const handleClick = () => removeItemFromCart(item)

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={handleClick}></i>
      <img alt='' src={item.url} width="130px"/>
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
