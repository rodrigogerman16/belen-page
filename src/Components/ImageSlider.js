import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides)|| slides.length <= 0) {return null;}

  return (
    <section className='Slider'>
        <FaArrowAltCircleLeft className='Left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='Right-arrow' onClick={nextSlide}/>
        {SliderData.map((slide, index) =>{
            return (
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {prevSlide}
                    {index === current && <img src={slide.image} alt="travel image" className='Image'/>}   
                    {nextSlide}              
                  </div>
              )       
        })}
    </section>
  )
}

export default ImageSlider