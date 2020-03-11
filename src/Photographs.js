import React, { Component } from 'react'
import np01 from "./photographs/np01.JPG";




class Photographs extends Component {
    render() {
        return (
            <div>
            <hr></hr>
                <h2>Photographs</h2>
                <br></br>
                <img src={np01} alt="np01" height="500px"/>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Photographs;