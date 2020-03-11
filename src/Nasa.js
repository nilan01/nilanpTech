import React, { Component } from 'react'
/*Generate API Key
Your API key for nilanpatel33@hotmail.com is:

05SCIzG1HrBebZdMFwROnC0ZIOGzFB3yJCzOBNhm
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=05SCIzG1HrBebZdMFwROnC0ZIOGzFB3yJCzOBNhm
For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

Account Email: nilanpatel33@hotmail.com
Account ID: 8df4c759-c725-4864-b26d-643c548ddb9f */

class Nasa extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: "",
            explanation: "",
            imageUrl: "",
            title: ""
        }

    }

    getData = () =>{
        return new Promise((resolve, reject)=>{
            fetch("https://api.nasa.gov/planetary/apod?api_key=05SCIzG1HrBebZdMFwROnC0ZIOGzFB3yJCzOBNhm")
            .then((response)=>{
                return response.json();
            })
            .then((myJson)=>{
                this.setState({date: myJson.date, explanation: myJson.explanation, imageUrl: myJson.hdurl, title: myJson.title});
            })
        })
    }

    componentDidMount = () => {
        this.setState(this.getData());
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.date}</h3>
                <br></br>
                <br></br>
                <img src={this.state.imageUrl} height="500" ></img>
                <br></br>
                <br></br>
                <br></br>
                <p>{this.state.explanation}</p>

            </div>
        )
    }
}


export default Nasa;