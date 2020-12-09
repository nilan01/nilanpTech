import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import tictactoe from "./projectPhotos/tictactoe.PNG";
import nasapic from "./projectPhotos/NASA.PNG";
import arduino1 from "./projectPhotos/arduino.jpg";
import love from "./projectPhotos/lovemeter.jpg";
import sterling from "./projectPhotos/sterling.jpg";
import iOSTicket from "./projectPhotos/iOSTicket.PNG";
import iOSWeather from "./projectPhotos/iOSWeather.PNG";
import leaflab from "./projectPhotos/leaflab.PNG";


class Projects extends Component {
    render() {
        return (
            <div>
                <h2 class="subHeadings">Home</h2>
                <br></br>
                <CardColumns>
                <Card class="zoom">
                        <Card.Img variant="top" src={leaflab} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>Web Consulting - Pharmaceutical Industry</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Card.Text>
                        Professional web consulting for 
                        <a href="https://firstchancedesign.com/"> First Chance Design.</a>   
                        <br></br>
                        <br></br>
                        Check out the finished product by clicking the button below.                      
                        </Card.Text>
                        <Button href="https://leaflabcannabis.com/" target="_blank" variant="primary">Check it out!</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">December 03, 2020</small>
                            </Card.Footer>
                </Card>
                <Card class="zoom">
                        <Card.Img variant="top" src={iOSWeather} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>iOS App Development using Swift</Card.Title>
                        <Card.Text>
                        <a href="https://github.com/nilan01/weatherApp_API">Link to repository</a>
                        </Card.Text>
                        <Card.Text>
                            An iOS Weather application that connects to a Locations API for the user to select a city. After adding the selected city to the database, the user may then select the city to call a Weather API and GET the weather for the selected City.
                            <br></br>
                            <br></br>
                            Demonstrating use of: MVC design structure in iOS Development, Core Data.
                            <br></br>
                            <br></br>
                            The simulator for this application to come shortly..                       
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">November 30, 2020</small>
                            </Card.Footer>
                </Card>
                <Card class="zoom">
                        <Card.Img variant="top" src={sterling} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>Web Consulting - Mining Industry</Card.Title>
                        <Card.Text>
                            Professional web consulting for 
                            <a href="https://firstchancedesign.com/"> First Chance Design.</a>   
                            <br></br>
                            <br></br>
                            Check out the finished product by clicking the button below.                          
                        </Card.Text>
                        <Button href="https://sterlingmetals.ca/" target="_blank" variant="primary">Check it out!</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">October 22, 2020</small>
                            </Card.Footer>
                </Card>
                <Card class="zoom">
                        <Card.Img variant="top" src={iOSTicket} style={{styles:"resizeMode"}} />
                        <Card.Body>
                        <Card.Title>iOS App Development using Swift</Card.Title>
                        <Card.Text>
                        <a href="https://github.com/nilan01/iOSTicketManager">Link to repository</a>
                        </Card.Text>
                        <Card.Text>
                            A skeleton ticket managing application, demonstrating an understanding of Navigation Controllers, TableViewControllers, & the passing of data from one page to another using Segue's.
                            <br></br>
                            <br></br>
                            To run this application, click the button below. Be sure to select iphone 11 Pro & iOS 14.1 before "tapping to play".                       
                        </Card.Text>
                        <Button href="https://appetize.io/app/g7venz10nfacd55hfzz9yw5m18" target="_blank" variant="primary">Check it out!</Button>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">October 19, 2020</small>
                            </Card.Footer>
                 </Card>
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
                        <Card.Title>Arduino: Circuit Basics! </Card.Title>
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