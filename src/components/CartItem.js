import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../css/CartItem.css'
import useHover from '../hooks/useHover'

function CartItem({item, removeItemFromCart}) {

  const [ trashIconHover, ref ] = useHover(false)

  useEffect(() => {
     ref.current.className= trashIconHover ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
  }, [trashIconHover, ref])

  const handleClick = () => removeItemFromCart(item)

  return (
    <div className="cart-item">
      <i ref={ref} className='ri-delete-bin-line' onClick={handleClick}></i>
      <img alt='' src={item.url} width="130px"/>
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartItem
