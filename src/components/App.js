// @flow
import React from 'react';
//Components
import CarrierSorter from './CarrierSorter';
import CarrierCard from './CarrierCard';
//Data
const carrierData = require('../carrier_cards');

// Please see the `Real World Application` section of the README for how I would have configured App componentDidMount with an active endpoint.
const App = () => {
  const minutes = Math.floor(carrierData.search_time / 60000);
  const pluralMinutes = minutes > 1 ? `minutes` : `minute`;
  const renderCards = () => {
    return carrierData.carrier_cards.map((card, index) => {
      //only passing down props that will actually be used
      return (
          <CarrierCard
            key={index}
            type={card.type}
            name={card.name}
            tagline={card.tagline}
            featureList={card.features_html}
            link={card.action.link}
            linkText={card.action.link_text}
            logo={card.logo}
            features={card.features}
            description={card.detail_body}
            rate={card.rate}
            stars={card.stars}
            disclaimerText={card.action.disclaimer_text}
            cornerTag={card.corner_tag}
            tag={card.tag}
          />
      );
    })
  };

  return (
      <div className='app'>
        <div className='app-top-bar'>
          <p>You just compared <strong>{carrierData.carriers_searched} rates</strong> in {minutes} {pluralMinutes}!</p>
          <CarrierSorter />
        </div>
        {renderCards()}
      </div>
  );
};

export default App;
