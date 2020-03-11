import React, { Component } from 'react'
import arduino1 from "../projectPhotos/arduino.jpg";

 class Blog1 extends Component {
    render() {
        return (
            
            <div>
            <hr></hr>
                <h1>Learning Robotics with Arduino Uno: Circuit Basics</h1>
                <info class="info" datetime="11 Mar 2020 00:00:00 +0000">11 Mar 2020 · 2 min read
                </info>
                <br></br>
                <br></br>
                <br></br>
                <p class="blogBody">
                    I recently purchased the <a href="https://store.arduino.cc/usa/fundamentals-bundle">Arduino Fundamentals Starter Kit</a>.
                    The kit comes with the Arduino Projects Book, which will walk me through 15 different projects using the <a href="https://store.arduino.cc/usa/arduino-uno-rev3">Arduino Uno</a>.
                    These projects aim to provide a fundamental skillset for anyone interested in the field of <a class="tag" href="/tag/robotics">robotics</a>.
                    Over the next few weeks, I'll be sharing my experience using the <a href="https://store.arduino.cc/usa/fundamentals-bundle">Arduino Fundamentals Starter Kit</a> here! 
                    I will also be sharing some core fundamental concepts of circuits, robotics, and innovation that I'll have learned through my experimentation on the <a href="https://store.arduino.cc/usa/arduino-uno-rev3">Arduino Uno</a>.
                </p>

                <h3>Core Concepts: Circuits</h3>
                <p>transducers = component used to change diferent types of energy into electrical energy and vice-versa.</p>
                <p>2 types of transducers:
                <br></br>
                <br></br>
                <ul>
                    <li>
                         sensors = convert other forms of energy into electrical energy
                    </li>  
                    <li>
                         actuators = convert electrical energy into other forms of energy
                    </li>
                </ul>
                <p>circuit = closed loops of wire with a power source (often used to do something useful with energy, called a load).</p>
                <p>Note that in a circuit, electricity flows from a point of higher potential energy to a point of lower potential energy. Ground (also represented as - or GND) 
                is often the point of least potential</p>
                </p>
                <h3>Core Concepts: Ohm's Law</h3>
                <p>Ohm's Law demonstrates the relationship between Current, Voltage, & Resistance (discovered by <a href="https://en.wikipedia.org/wiki/Georg_Ohm">Georg Simon Ohm</a>).</p>
                <p> VOLTAGE (V) = CURRENT (I) * RESISTANCE (R)</p>
                <img class = "imgCenter"src={arduino1} alt="Arduino Uno" height="400"></img>

            </div>
        )
    }
}

export default Blog1;