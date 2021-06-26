import React, { Component } from 'react'
import HornedBeast from './HornedBeast';
import hornsdata from './hornsdata.json'
import {Row} from 'react-bootstrap'
 class Main extends Component {
    render() {
       
        return (
            <Row>
          {
              hornsdata.map((item , i)=>{
                  return(
                      <HornedBeast title={item.title}
                       pic={item.image_url}
                       description={item.description} />
                  )
              })
          }

            </Row>
        )
    }
}

export default Main;
