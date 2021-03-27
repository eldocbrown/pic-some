import React, { useContext }from 'react'
import PropTypes from 'prop-types'
import '../css/Image.css'
import { AppContext } from '../appContext'
import useHover from '../hooks/useHover'

function Image({className, img}) {

  const { toggleFavorite, addItemToCart, removeItemFromCart, cartItems } = useContext(AppContext)

  const [ hovered, ref ] = useHover(false)

  const handleFavoriteClick = () => toggleFavorite(img.id)

  const handleAddToCartClick = () => addItemToCart(img)

  const handleRemoveFromCartClick = () => removeItemFromCart(img)

  // heartIcon
  const heartIcon = () => {
    if (img.isFavorite) { return <i className="ri-heart-fill favorite" onClick={handleFavoriteClick}></i> }
    else if (hovered) { return <i className="ri-heart-line favorite" onClick={handleFavoriteClick}></i> }
  }

  // cartActionIcon
  const cartIcon = () => {
    if (cartItems.some((i) => i.id === img.id)) { return <i className="ri-delete-bin-fill cart" onClick={handleRemoveFromCartClick}></i> }
    else if (hovered) { return <i className="ri-add-circle-line cart" onClick={handleAddToCartClick}></i> }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={img.url} alt='' className="image-grid"/>
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
