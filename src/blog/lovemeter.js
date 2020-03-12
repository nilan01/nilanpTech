import React, { Component } from 'react'

 class lovemeter extends Component {
    render() {
        return (
            <div>
                <h1>LOVE-O-METER</h1>
                <h4>Designed to determine just how hot you really are (wink).</h4>
                <info class="info" datetime="11 Mar 2020 00:00:00 +0000">
                    12 Mar 2020 · 2 min read
                </info>
                <br></br>
                <br></br>
                <br></br>
                <p class="blogBody">
                    The LOVE-O-METER was designed to measure the temperature of a person's hand. The hotter the individual, the more LEDS would light up - simple.
                    I put together the LOVE-O-METER using a TMP36 (temperature sensor) three resistors, three LEDS, and a few wires to connect these components across a breadboard, to GND, and to power.
                </p>
            </div>
        )
    }
}

export default lovemeter;