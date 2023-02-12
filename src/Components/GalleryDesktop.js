import images from './images'
import React from 'react' 

const GallerySlider = () => {
  return (
    <div>
    <div className='Gallery-laptop-container' id='Gallery'>          
      {images.map(image => (
        <div className='Img-laptop-gallery'>
          <img src={image} alt=''/>
        </div>
    ))}
    </div>
    </div>
  )
}

export default GallerySlider