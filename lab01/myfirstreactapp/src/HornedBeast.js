import React, { Component } from 'react'
import Main from './Main'

export class HornedBeast extends Component {
    render() {
           
        return (
            <div>
             <h2>{this.props.title}</h2>
            
             <img src={this.props.pic} />
             <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;
