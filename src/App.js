import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Form from './Components/Form'
import ImageSlider from './Components/ImageSlider'
import { SliderData } from './Components/SliderData'
import GallerySlider from './Components/GallerySlider'
import images from './Components/images'

function App() {
  return (
    <div className="App">

      {/* NAVBAR */}
      <nav className='Navbar'>
          <div className='Belen-title'><img src="/favicon.ico"/></div>
          <div className='Navbar-ul'>
            <ul>
              <li><a href='#About'>About Me</a></li>
              <li><a href='#Courses'>Courses</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#References'>References</a></li>
              <li><a href='#Contact'>Contact</a></li>
            </ul>
          </div>
        <div className='Hamburguer-nav'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>

      {/* ABOUT ME*/}
      <div className='About-container' id='About'>
        <div className='Img-about-container'>
          <div className='Img-about'>
            <img src="/img-about.png" />
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

      {/* COURSES */}
      <div className='Courses-container' id='Courses'>
          <div className='Courses-text'>
            <div>
              <h2>“You are never too old to set another goal or to dream a new dream.”</h2>
              <h3>— Malala Yousafzai</h3>
            </div>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h4>
          </div>
          
          <div className='Courses-video'>
            <video src="/courses.mp4" muted loop autoPlay />
          </div>
      </div>

      {/* GALLERY */}
        <h3 className='Gallery-title'>Gallery</h3>
        <div className='Gallery-laptop-container' id='Gallery'>          
          {images.map(image => (
            <div className='Img-laptop-gallery'>
              <img src={image} alt=''/>
            </div>
        ))}
        </div>

      
      <GallerySlider> </GallerySlider>
      <div className='Social-links-container'>
          <h2 className='Social-links-title'>See more</h2>
          <div className='Social-links'>
            <a href="https://www.instagram.com/belen_tejedor/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
      </div>

      {/* REFERENCES */}
        <h3 className='References-title'>Some of my stundents</h3>
        <ImageSlider slides={SliderData}/>
      {/* CONTACT */}
        <Form />

    </div>
  );
}

export default App;
