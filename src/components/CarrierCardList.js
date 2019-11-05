import React from 'react';
import CarrierCard from './CarrierCard';

// type Props = {
//     cards: Array<Object>
// }

const CarrierCardList = props => {
    const renderCards = () => {
        return props.cards.map((card, index) => {
            return <CarrierCard key={index} cardInfo={card}/>
        });
    };
    return (
        <div className="carrier-card-list">
            {renderCards()}
        </div>
    );
};

export default CarrierCardList;
