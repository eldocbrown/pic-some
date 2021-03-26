import React, { useContext } from "react"

import CartItem from '../components/CartItem'
import { AppContext } from '../appContext'

function Cart() {

  const FIXED_PRICE = 5.99

  const { cartItems, removeItemFromCart } = useContext(AppContext)

  const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart}/>)

  const orderPrice = cartItems.length * FIXED_PRICE
  const orderPriceDisplay = orderPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {orderPriceDisplay}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  )
}

export default Cart
