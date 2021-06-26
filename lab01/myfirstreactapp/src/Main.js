import React, { Component } from 'react'
import HornedBeast from './HornedBeast';

import {Row} from 'react-bootstrap'
 class Main extends Component {
    render() {
       
        return (
            <Row>
          {
              this.props.data.map((item , i)=>{
                  return(
                      <HornedBeast title={item.title}
                       pic={item.image_url}
                       description={item.description}
                       modal={this.props.selectModal}
                        />
                      
                  )
              })
          }

            </Row>
        )
    }
}

export default Main;
