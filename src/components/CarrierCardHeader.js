import React from 'react';
//Material UI
import StarIcon from '@material-ui/icons/StarRate';
//Components
import CarrierQuote from './CarrierQuote';

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
        <div className='carrier-card-header'>
            {cornerTag &&
                <div className='corner-tag'>
                    <StarIcon className='star-tag' />
                </div>
            }
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt='logo' />
                <div style={{marginLeft: '35px'}}>
                    <h4>{name}</h4>
                    {tagline && <h6>{tagline}</h6>}
                    <div>{stars && renderRating()}</div>
                </div>
            </div>
            <div>
                <CarrierQuote quote={rest}/>
            </div>
        </div>
    );
};

export default CarrierCardHeader;
