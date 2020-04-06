import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';
import Navbar from 'react-bootstrap/Navbar'
import Blog from './Blog';
import Blog1 from './blog/robotics-with-arduino-uno'
import Blog2 from './blog/lovemeter'


class App extends Component {
  

  render() {
    return(
    <div className="App">
    <Navbar>
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
      <p>Software & Quality Engineer <span role="img" aria-label="astronaut">👨‍🚀</span></p>
      <Clock></Clock>
      <hr></hr>
    </header>
    <div>
     
    </div>
        
    <Switch>
    <Route exact path='/' render={() => (
      <Projects  />
    )}/>
    <Route exact path='/blog' render={() => (
      <Blog  />
    )}/>
     <Route exact path='/contact' render={() => (
      <Contact />
     )}/>
     <Route exact path='/projects' render={() => (
      <Projects  />
     )}/>
     <Route exact path='/blog/robotics-with-arduino-uno' render={() => (
      <Blog1  />
     )}/>
     <Route exact path='/blog/lovemeter' render={() => (
      <Blog2  />
     )}/>
     
</Switch>   

  <footer className="d-flex justify-content-between">
    <p>© 2020 - nilanp.tech </p>
    <p>Nilan Patel</p>
  </footer>
</div>
  );
  
  }
  
}

export default App;
