import React, { useState, useContext }from 'react'
import PropTypes from 'prop-types'
import '../css/Image.css'
import { AppContext } from '../appContext'

function Image({className, img}) {

  const { toggleFavorite, addItemToCart, removeItemFromCart, cartItems } = useContext(AppContext)

  const [ hovered, setHovered ] = useState(false)

  const enableHovered = () => setHovered(true)

  const disableHovered = () => setHovered(false)

  const handleFavoriteClick = () => toggleFavorite(img.id)

  const handleAddToCartClick = () => addItemToCart(img)

  const handleRemoveFromCartClick = () => removeItemFromCart(img)

  // heartIcon
  const heartIcon = () => {
    if (img.isFavorite) { return <i className="ri-heart-fill favorite" onClick={handleFavoriteClick}></i> }
    else if (hovered) { return <i className="ri-heart-line favorite" onMouseEnter={enableHovered} onMouseLeave={disableHovered} onClick={handleFavoriteClick}></i> }
  }

  // cartActionIcon
  const cartIcon = () => {
    if (cartItems.some((i) => i.id === img.id)) { return <i className="ri-delete-bin-fill cart" onClick={handleRemoveFromCartClick}></i> }
    else if (hovered) { return <i className="ri-add-circle-line cart" onMouseEnter={enableHovered} onMouseLeave={disableHovered} onClick={handleAddToCartClick}></i> }
  }

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt='' className="image-grid" onMouseEnter={enableHovered} onMouseLeave={disableHovered}/>
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
