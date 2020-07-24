import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Halal Cocktails',
        info:
          "We have all manner of martinis, mojitos, gin drinks and more that are quick and easy to make when you're entertaining. Try this refreshing twist on a traditional sangria and use white wine instead of red." ,
      },
      {
        icon: <FaHiking />,
        title: 'Climb Some Mountain',
        info: 'You don’t have to be a climber to make it to the top of some of the world’s most noteworthy mountains – including two summits that are technically higher than Mount Everest. This tall and well-signed climb has very few challenging sections but the altitude can take its toll on some.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: ' We offer several free, high-frequency courtesy shuttles to get you to and from various destinations around the resort campus. Grab a shuttle to any near by trails, beaches, or mountain paths.',
      },
      {
        icon: <FaBeer />,
        title: 'Free Halal Beer!!',
        info: 'Non-alcoholic Beer, alcohol free beer. You can find a good-tasting, alcohol-free brew from a handful of craft breweries -- and a couple of the big beer brands.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
