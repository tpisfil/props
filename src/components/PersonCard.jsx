import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {this.props.hair}</h4>
                <button onClick={ ()=> { this.setState({age: this.state.age +1}) } }>Birthday Button for {this.props.firstname}!</button>
            </div>
        );
    }
}

export default PersonCard;