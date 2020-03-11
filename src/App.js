import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import ClickCounter from './ClickCounter';
import RenderData from './RenderData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Writing from './Writing';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import Navbar from 'react-bootstrap/Navbar'
import Nasa from './Nasa';
import Blog from './Blog';
import Blog1 from './blog/robotics-with-arduino-uno'


class App extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return(
    <div className="App">
    <Navbar sticky="top">
      <Navbar.Collapse className="justify-content-end">
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar> 

    <header className="header">
      <h3>
        <a href="/" class="homeLink">
          Nilan Patel
        </a>
      </h3>
      <p>Software & Quality Engineer</p>
      <Clock></Clock>
      <hr></hr>
    </header>
    <div>
     
    </div>
    <br></br>
    <br></br>
    
    <Switch>
    <Route exact path='/' render={() => (
      <Projects  />
    )}/>
    <Route exact path='/blog' render={() => (
      <Blog  />
    )}/>
     <Route exact path='/contact' render={() => (
      <Contact  />
     )}/>
     <Route exact path='/projects' render={() => (
      <Projects  />
     )}/>
     <Route exact path='/blog/robotics-with-arduino-uno' render={() => (
      <Blog1  />
     )}/>
     
</Switch>   

  <footer className="d-flex justify-content-between">
    <p>© 2020 - nilanpatel.dev</p>
    <p>Nilan Patel</p>
  </footer>
</div>
  );
  
  }
  
}

export default App;
