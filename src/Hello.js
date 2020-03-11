import React from 'react';

//Function approach to creating a component

// function Hello(props) {
//   return (
//     <p>Hello {props.name}</p>
//   );
// }

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    age(){
        var age = this.state.date.getFullYear() - 1993;
        return age;
    }
    render(){
        return (
            <br></br>
        );
    }

}

export default Hello;
