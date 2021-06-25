import React, { Component } from 'react'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
          numberofclicks:0,
        }
    }
    increaseNumber=()=>{
        this.setState(
            {
                numberofclicks:this.state.numberofclicks+1,
            }
        )
    }
    render() {
           
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.pic} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    😸Number of Pats: {this.state.numberofclicks}
                    </Card.Text>
                    <Button onClick={this.increaseNumber} variant="primary">pick</Button>
                </Card.Body>
            </Card>
            
        )
    }
}

export default HornedBeast;
