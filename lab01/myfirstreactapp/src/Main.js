import React, { Component } from 'react'
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';

import {Row} from 'react-bootstrap'
 class Main extends Component {
     constructor(){
         super();
         this.state={
             horns:0,
         }
     }
     handleHorns=(e)=>{
         this.setState({
            horns: e.target.value
         })
          
     }
    render() {
       
        return (
           
         
            <Row>
                 <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Custom select &nbsp;&nbsp; </Form.Label>
              <Form.Control as="select" custom onChange={(e) => this.handleHorns(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
  
              </Form.Control>
            </Form.Group>
          </Form>
          {
              this.props.data.map((item , i)=>{
                  return(
                      (Number(this.state.horns) === item.horns &&
                      <HornedBeast title={item.title}
                       pic={item.image_url}
                       description={item.description}
                       modal={this.props.selectModal}
                        />) ||
                        (Number(this.state.horns) === 0 &&
                        <HornedBeast title={item.title}
                         pic={item.image_url}
                         description={item.description}
                         modal={this.props.selectModal}
                          />)
                      
                  )
              })
          }

            </Row>
        )
    }
}

export default Main;
