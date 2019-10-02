import React from 'react';
import CarrierQuote from "./CarrierQuote";
import StarIcon from '@material-ui/icons/StarRate';
import Icon from "@material-ui/core/Icon";

// type Props = {
//     cardInfo: Object
// }

const CarrierCardHeader = props => {
    const { name, tagline, stars, features, logo, cornerTag, ...rest } = props.cardInfo;

    const renderRating = () => {
        const rating = [];
        for(let i = 0; i < stars; i++) {
            rating.push(i);
        }
        return rating.map((star, index) => {
            return (
                <StarIcon key={index}  style={{fontSize: 22, color: 'FE9202'}} />
            );
        });
    };

    // const renderFeatureIcons = () => {
    //     features.map(feature => {
    //         // return (
    //         //     <Icon key={feature.group_id}>{feature.icon}</Icon>
    //         // )
    //         console.log(feature.icon);
    //     });
    // };

    return (
        <div className="carrier-card-header">
            <h4>{name}</h4>
            {tagline && <h6>{tagline}</h6>}
            <div>
                {stars && renderRating()}
            </div>
            <CarrierQuote quote={rest}/>
        </div>
    );
};

export default CarrierCardHeader;
