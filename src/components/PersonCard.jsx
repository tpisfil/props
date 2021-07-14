import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <h4>Age: {this.props.age}</h4>
                <h4>Hair Color: {this.props.hair}</h4>
            </div>
        );
    }
}

export default PersonCard;