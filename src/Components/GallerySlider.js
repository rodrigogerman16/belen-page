import images from './images'
import React from 'react'  
import '../Styles/GallerySlider.css'
import { motion } from 'framer-motion'

const GallerySlider = () => {
  return (
    <motion.div className='Gallery-slider-container'>
      <motion.div className='Gallery-slider' drag='x' dragConstraints={{right: 0, left: -1000}}>
        {images.map(image => (
            <motion.div className='Gallery-Item'>
              <img src={image} alt=''/>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default GallerySlider