import './App.css';

import Form from './Components/Form'
import Nav from './Components/Nav';
import About from './Components/About';
import Courses from './Components/Courses';
import GalleryDesktop from './Components/GalleryDesktop'
import { Route } from 'react-router-dom';
import References from './Components/References';

function App() {
  return (
    <div>
      <Route path="/">
        <Nav/>
      </Route>

      <Route exact path="/" component={About}/>

      <Route exact path="/courses" component={Courses} />
        
      <Route exact path="/gallery">
        <GalleryDesktop />     
      </Route>
      
      <Route exact path="/references">
        <References/>
      </Route>
      
      <Route exact path="/contact">
        <Form />
      </Route>       
    </div>
  );
}

export default App;
