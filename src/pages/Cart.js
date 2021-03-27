import React, { useState, useContext } from "react"

import CartItem from '../components/CartItem'
import { AppContext } from '../appContext'
import '../css/Cart.css'

function Cart() {

  const FIXED_PRICE = 5.99

  const TIMEOUT = 3000

  const { cartItems, removeItemFromCart } = useContext(AppContext)

  const [ ordering, setOrdering ] = useState(false)

  const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart}/>)

  const orderPrice = cartItems.length * FIXED_PRICE

  const orderPriceDisplay = orderPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const orderButtonDisplay = () => ordering ? 'Ordering...' : 'Place Order'

  const handlePlaceOrderClick = () => { // Simulate a place order
    setOrdering(true)
    setTimeout(() => {
      cartItems.map((item) => removeItemFromCart(item))
      setOrdering(false)
    }, TIMEOUT)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {orderPriceDisplay}</p>
      {
        cartItems.length ?
          <div className="order-button">
            <button onClick={handlePlaceOrderClick} disabled={ordering}>{orderButtonDisplay()}</button>
          </div>
          :
          <p>No items in cart</p>
      }
    </main>
  )
}

export default Cart
