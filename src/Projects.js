import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import tictactoe from "./projectPhotos/tictactoe.PNG";
import nasapic from "./projectPhotos/NASA.PNG";
import arduino1 from "./projectPhotos/arduino.jpg";
import love from "./projectPhotos/lovemeter.jpg";

class Projects extends Component {
    render() {
        return (
            <div>
                <h2 class="subHeadings">Projects</h2>
                <br></br>
                <CardColumns>
                <Card class="zoom">
                        <Card.Img variant="top" src={love} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>Arduino: LOVE-O-METER </Card.Title>
                        <Card.Text>
                            How hot are you? ;)
                        </Card.Text>
                        <Button href="./blog/lovemeter" target="" variant="primary">Read Me</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">March 12, 2020</small>
                            </Card.Footer>
                    </Card>
                <Card class="zoom">
                        <Card.Img variant="top" src={arduino1} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>Arduino: Circuit Basics </Card.Title>
                        <Card.Text>
                            What I learned doing my first project with Arduino Uno (my first post).
                        </Card.Text>
                        <Button href="./blog/robotics-with-arduino-uno" target="" variant="primary">Read Me</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">March 11, 2020</small>
                            </Card.Footer>
                    </Card>
                <Card class="zoom">
                    <Card.Img variant="top" src={nasapic} style={{styles:"resizeMode"}} />
                    <Card.Body>
                    <Card.Title>News from NASA</Card.Title>
                    <Card.Text>
                        Stay up to date with NASA's most recent images.
                    </Card.Text>
                    <Button href="https://protected-refuge-91548.herokuapp.com/" target="_blank" variant="primary">Check it out!</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">March 1, 2020</small>
                        </Card.Footer>
                </Card>
                    <Card class="zoom">
                        <Card.Img variant="top" src={tictactoe} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>Tic-Tac-Toe: You vs A.I.</Card.Title>
                        <Card.Text>
                            Think you could take us on?
                        </Card.Text>
                        <Button href="https://Unbeatable-Tic-Tac-Toe.nilanpatel.repl.run" target="_blank" variant="primary">Play Now!</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">December 30, 2019</small>
                            </Card.Footer>
                    </Card>    
                </CardColumns>
                <br></br> 
                <br></br>           
            </div>
        )
    }
}
export default Projects;