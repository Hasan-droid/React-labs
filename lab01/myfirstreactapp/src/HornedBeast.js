import React, { Component } from 'react'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
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
    viewPicData=()=>{
        let data = {
            title: this.props.title,
            img_url: this.props.pic,
            description: this.props.description
        };
        this.props.modal(data);
    }
    render() {
           
        return (
            <Col>
            <Card className="justify-content-center" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.props.pic} style={{height:'300px'}}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    😸Number of Pats: {this.state.numberofclicks}
                    </Card.Text>
                    <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} onClick={this.increaseNumber} variant="primary">pick</Button>
                    <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} variant="danger" onClick={this.viewPicData}> Zoom </Button>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}

export default HornedBeast;
