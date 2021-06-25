import React, { Component } from 'react'
import HornedBeast from './HornedBeast';
import hornsdata from './hornsdata.json'
 class Main extends Component {
    render() {
       
        return (
            <div>
          {
              hornsdata.map((item , i)=>{
                  return(
                      <HornedBeast title={item.title}
                       pic={item.image_url}
                       description={item.description} />
                  )
              })
          }

            </div>
        )
    }
}

export default Main;
