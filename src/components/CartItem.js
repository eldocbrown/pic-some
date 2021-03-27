import React, { useState, useEffect, useRef } from 'react'

import '../css/CartItem.css'

function CartItem({item, removeItemFromCart}) {

  const trashIconRef = useRef()

  const [ trashIconHover, setTrashIconHover ] = useState(false)

  const enableTrashHovered = () => setTrashIconHover(true)

  const disableTrashHovered = () => setTrashIconHover(false)

  useEffect(() => {
     trashIconRef.current.className= trashIconHover ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
  }, [trashIconHover])

  const handleClick = () => removeItemFromCart(item)

  return (
    <div className="cart-item">
      <i ref={trashIconRef} className='ri-delete-bin-line' onClick={handleClick} onMouseEnter={enableTrashHovered} onMouseLeave={disableTrashHovered}></i>
      <img alt='' src={item.url} width="130px"/>
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
