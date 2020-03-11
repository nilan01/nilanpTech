import React from 'react';

class ClickCounter extends React.Component{
    constructor(props){
        super(props);

        this.state = {numClicks: 0};

        this.increaseNumClicks = this.increaseNumClicks.bind(this); // 'this' must be bound to the event handler
    }

    increaseNumClicks(e){ // 'e' is the current event object
        this.setState((prevState) => {
            return { numClicks: prevState.numClicks + 1 }
        });
    }

    render(){
        return <button onClick={this.increaseNumClicks}>Clicks: {this.state.numClicks}</button>
    }
}

export default ClickCounter;
