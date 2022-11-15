import React from "react";

const About = () =>{
    return(
        <div className='About-container'>
        <div className='Img-about-container'>
          <div className='Img-about'>
            <img src="/img-about.png" alt="about-img"/>
          </div>
        </div>
        <div className='Text-about-container'>
          <h1>Belen Tejedor</h1>
          <h2>Dancer - Coreographer - Model</h2>
          <div className='Text-about-description'>
            <h3>A little about me</h3>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
          </div>
        </div>
      </div>
    )
}

export default About