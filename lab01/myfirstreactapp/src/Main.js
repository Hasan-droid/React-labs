import React, { Component } from 'react'
import HornedBeast from './HornedBeast';

export class Main extends Component {
    render() {
        let hornes=[
            {
                 image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                 title: "UniWhal",
                 description: "A unicorn and a narwhal nuzzling their horns",
                 keyword: "narwhal",
                 horns: 1
            },
            {
                 image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
                 title: "Rhino Family",
                 description: "Mother (or father) rhino with two babies",
                 keyword: "rhino",
                 horns: 2
            },
        ] 
        return (
            <div>
            <HornedBeast title={hornes[0].title} pic={hornes[0].image_url }description={hornes[0].description} />
            <HornedBeast title={hornes[1].title} pic={hornes[1].image_url } description={hornes[1].description}/>

            </div>
        )
    }
}

export default Main;
