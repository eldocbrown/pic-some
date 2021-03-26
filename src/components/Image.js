import React, { useState, useContext }from 'react'
import '../css/Image.css'
import { AppContext } from '../appContext'

function Image({className, img}) {

  const { toggleFavorite } = useContext(AppContext)

  const [ hovered, setHovered ] = useState(false)

  const enableHovered = () => setHovered(true)

  const disableHovered = () => setHovered(false)

  const handleFavoriteClick = () => toggleFavorite(img.id)

  // heartIcon
  const heartIcon = () => {
    if (img.isFavorite) { return <i className="ri-heart-fill favorite" onClick={handleFavoriteClick}></i> }
    else if (hovered) { return <i className="ri-heart-line favorite" onMouseEnter={enableHovered} onMouseLeave={disableHovered} onClick={handleFavoriteClick}></i> }
    else return null
  }

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt='' className="image-grid" onMouseEnter={enableHovered} onMouseLeave={disableHovered}/>
      {heartIcon()}
      {hovered && <i className="ri-add-circle-line cart" onMouseEnter={enableHovered} onMouseLeave={disableHovered}></i>}
    </div>
  )
}

export default Image
