import React, { Component } from 'react'

class RenderData extends Component {
    constructor(props){
        super(props);
        this.state = { users:[
            { 'user': 'fred',    'active': false, 'age': 40 },
            { 'user': 'pebbles', 'active': false, 'age': 1  },
            { 'user': 'barney',  'active': true,  'age': 36 }
        ]};
        
    }
    render() {
        return (
            <div>
            {this.state.users[0].active &&
                <p>{this.state.users[0].user} is Active!</p>
            }
            </div>
        )
    }
}

export default RenderData;
