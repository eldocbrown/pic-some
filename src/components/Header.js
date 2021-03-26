import React, { useContext } from "react"
import { Link } from "react-router-dom"

import '../css/Header.css'
import { AppContext } from '../appContext'

function Header() {
    const { cartItems } = useContext(AppContext)

    const cartIcon = () => cartItems.length ?
      <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> // Cart with items
      :
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i> // Cart empty

    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to="/cart">{cartIcon()}</Link>
        </header>
    )
}

export default Header
