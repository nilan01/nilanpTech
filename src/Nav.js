import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

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