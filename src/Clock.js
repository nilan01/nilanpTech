import React from 'react';


class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    render(){
        return (
            <div>            
            <h4>{this.state.date.toLocaleTimeString('en-US',{hour12: false})}</h4>
            </div>
        );
    }

}

export default Clock;
