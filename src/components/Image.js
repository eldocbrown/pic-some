import React, { useState }from 'react'
import '../css/Image.css'

function Image({className, img}) {

  const [ hovered, setHovered ] = useState(false)

  const enableHovered = () => setHovered(true)

  const disableHovered = () => setHovered(false)

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt='' className="image-grid" onMouseEnter={enableHovered} onMouseLeave={disableHovered}/>
      {hovered && <i className="ri-heart-line favorite" onMouseEnter={enableHovered} onMouseLeave={disableHovered}></i>}
      {hovered && <i className="ri-add-circle-line cart" onMouseEnter={enableHovered} onMouseLeave={disableHovered}></i>}
    </div>
  )
}

export default Image
