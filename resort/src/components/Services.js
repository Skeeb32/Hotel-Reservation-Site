import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
export default class Services extends Component {
state={
    services: [
        {
            icon:<FaCocktail/>,
            title:"Free Halal Cocktails",
            info: "Drink some halal cocktails."
        },
        {
            icon:<FaHiking/>,
            title:"Climb Some Mountain",
            info: "Go hiking."
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info: "Grab a shuttle to the mountain."
        },
        {
            icon:<FaBeer/>,
            title:"Free Halal Beer",
            info: "Drink some halal beer."
        }
    ]
}
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}
