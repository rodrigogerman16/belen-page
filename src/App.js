import './App.css';

import Form from './Components/Form'
import ImageSlider from './Components/ImageSlider'
import { SliderData } from './Components/SliderData'
import GallerySlider from './Components/GallerySlider'
import Nav from './Components/Nav';
import About from './Components/About';
import Courses from './Components/Courses';
import GalleryDesktop from './Components/GalleryDesktop'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Nav/>
      </Route>

      <Route exact path="/" component={About}/>

      <Route exact path="/courses" component={Courses} />
        
      <Route exact path="/gallery">
        <GalleryDesktop />      
        <GallerySlider />
      </Route>
      
      <Route exact path="/references">
        <ImageSlider slides={SliderData}/>
      </Route>
      
      <Route exact path="/contact">
        <Form />
      </Route>       
    </div>
  );
}

export default App;
