import React, { Component } from 'react'
import lovemeter2 from "../projectPhotos/lovemeter2.jpg";
import lovecode from "../projectPhotos/lovecode.PNG";
import serialMonitor from "../projectPhotos/serialMonitor.PNG"
 class Blog2 extends Component {
    render() {
        return (
            <div>
                <h1>LOVE-O-METER</h1>
                <h4>Designed to determine just how hot you really are! ;) </h4>
                <info class="info" datetime="11 Mar 2020 00:00:00 +0000">
                    12 Mar 2020 · 2 min read
                </info>
                <br></br>
                <br></br>
                <br></br>
                <div class="blogBody">
                    <p>
                        The LOVE-O-METER was designed to measure the temperature of a person's hand. The hotter the individual, the more LEDS would light up - simple. This project was a great way for me to
                        begin understanding how a microcontroller is able use sensors to detect different types of energy in it's surroundings and transduce this energy into electrical energy (to be then read by a PC). 
                         
                    </p>
                        <p>
                        I put together the LOVE-O-METER using a TMP36 (temperature sensor) three resistors, three LEDS, and a few wires to connect these components across a breadboard, to ground, and to power.
                        </p>
                    <br></br>
                    <img src={lovemeter2} class = "imgCenter" height="400"></img>
                    <br></br>
                    <br></br>
                    <p>
                        Once temperature is read by the TMP36 temperature sensor, heat energy is sent to the Analog-to-Digital Converter via analog pin A0 (or a pin of your liking). These pins can report back a value between 0 - 1023, which maps to a range of 0 - 5 volts (conversion can be seen in the code below).
                        I have written, compiled, and uploaded code to my Arduino Uno to illuminate LEDS depending on how warm an individual is.
                    </p>
                    <h3>the code:</h3>
                    <img src={lovecode} title="LOVE-O-METER code" alt="LOVE-O-METER code"></img>   
                    <br></br>            
                    <br></br>
                    <p>Arduino software (IDE) has a built in serial monitor, which allows users to view information relayed from a microcontroller to his/her computer in real-time. Below you may see an example of what the serial monitor looked like as I ran the LOVE-O-METER:</p>
                    <img class="imgCenter" src={serialMonitor} alt="Serial Monitor" title="Serial Monitor"></img>

                    <br></br>
                    <br></br>
                    <p>My next project on the Arduino Uno will be to create a Color Mixing Lamp! As always if you have any questions about anything you've read or came across on my website, please do not hesistate to reach out.</p>
                    <br></br>
                    N.P.
                    <br></br>
            
                    <br></br>
                    <br></br>
                
                </div>
            </div>
        )
    }
}

export default Blog2;