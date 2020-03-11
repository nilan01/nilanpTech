import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
/*
<Navbar sticky="top">
<Navbar.Brand href="/home">Human life is truly a short affair. It is better to live doing the things that you like.</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
    <a href="/projects" className="navbar">Projects</a>
    <a href="/writing" className="navbar">Written Pieces</a>
    <a href="/music" className="navbar">Music</a>
    <a href="/contact" id="contactLink" className="navbar">Contact</a>
</Navbar.Collapse>
</Navbar>
*/
 class Nav extends Component {
    
    render() {
        return (
            <div>
                <Navbar>
                    <div className ="row">   
                        <NavLink exact to="/" className="navbar" activeClassName="main-nav-active"  >HOME</NavLink>
                        <NavLink exact to="/blog" className="navbar" activeClassName="main-nav-active" >BLOG</NavLink>
                        <NavLink exact to="/contact" className="navbar" activeClassName="main-nav-active" >CONTACT</NavLink>
                    </div>
                </Navbar>        
            </div>
        )
    }
}


export default Nav;