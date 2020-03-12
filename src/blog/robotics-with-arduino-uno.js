import React, { Component } from 'react'
import arduino1 from "../projectPhotos/arduino.jpg";
import circuit from "../projectPhotos/circuits.gif";
 class Blog1 extends Component {
    render() {
        return (
            
            <div>
                <h1>Learning Robotics with Arduino Uno: Circuit Basics</h1>
                <info class="info" datetime="11 Mar 2020 00:00:00 +0000">11 Mar 2020 ·  1 min read
                </info>
                <br></br>
                <br></br>
                <br></br>
                <p class="blogBody">
                    I recently purchased the <a href="https://store.arduino.cc/usa/fundamentals-bundle">Arduino Fundamentals Starter Kit</a>.
                    The kit comes with the Arduino Projects Book, which will walk me through 15 different projects using the <a href="https://store.arduino.cc/usa/arduino-uno-rev3">Arduino Uno</a>.
                    These projects aim to provide a fundamental skillset for anyone interested in the field of <a class="tag" href="/tag/robotics">robotics</a>.
                    Over the next few weeks, I'll be sharing my experience using the <a href="https://store.arduino.cc/usa/fundamentals-bundle">Arduino Fundamentals Starter Kit</a> here. 
                    I will also be sharing fundamental concepts about circuits and robotics that I look forward to learning throughout my experimentation on the <a href="https://store.arduino.cc/usa/arduino-uno-rev3">Arduino Uno</a>.
                </p>

                <h3>Core Concepts: Circuits</h3>
                
                <p>A circuit is a closed loop of wire with a power source. There are two main types of circuits:</p>
                <ul>
                    <li>Series Circuits</li>
                    <li>Parallel-Circuits</li>
                </ul>
                <p>
                A series circuit consists of components that occur one after another. The flow of electrical current here relies on one component passing electrical current to the next.
                <br></br>
                <br></br>
                A parallel circuit consists of a circuit that is made up of component(s) that do not need to occur one after the other. A simple example of this is setting up an electrical circuit with 2 LEDS that flash independently of each other.
                In this case, both LEDS would require their own path to power. 
                </p>

                <img src={circuit} alt="Circuits" title="Circuits" class = "imgCenter" ></img>

                <p>Note that in a circuit, electricity flows from a point of higher potential energy to a point of lower potential energy. Ground (also represented as - or GND) 
                is often the point of least potential energy.</p>
                
                <br></br>
                <img class = "imgCenter"src={arduino1} alt="Arduino Uno" height="400" title="Arduino Uno"></img>
                <br></br>
                <br></br>
                <p>That is about it for now. I am Looking forward to my next project where I will be creating a LOVE-O-METER to test how hot you really are (wink)!</p>
                <br></br>
                 N.P.
                <br></br>
                
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Blog1;