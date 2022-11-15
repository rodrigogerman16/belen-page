import images from './images'
import React from 'react'  
import '../Styles/GallerySlider.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const GallerySlider = () => {
  return (
    <div>
    <h3 className='Gallery-title'>Gallery</h3>
    <div className='Gallery-laptop-container' id='Gallery'>          
      {images.map(image => (
        <div className='Img-laptop-gallery'>
          <img src={image} alt=''/>
        </div>
    ))}
    </div>
      <div className='Social-links-container'>
          <h2 className='Social-links-title'>See more</h2>
          <div className='Social-links'>
            <a href="https://www.instagram.com/belen_tejedor/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
      </div>
    </div>
  )
}

export default GallerySlider