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

    const renderFeatureIcons = () => {
        return features.map((feature, index) => {
            if(feature.path) {
                return (
                    <svg width='19' height='19' key={index} style={{marginLeft: '5px'}}>
                        <path d={feature.path} fill='#1c1e1f'/>
                    </svg>
                );
            }
        })
    };

    return (
        <div className='carrier-card-header'>
            {cornerTag &&
                <div className='corner-tag'>
                    <StarIcon className='star-tag' />
                </div>
            }
            <div className='carrier-info'>
                <img src={logo} alt='logo' />
                <div>
                    <h4>{name}</h4>
                    {tagline && <h6>{tagline}</h6>}
                    <div className='rating-and-feature'>
                        <div>{stars && renderRating()}</div>
                        <div>{features && renderFeatureIcons()}</div>
                    </div>
                </div>
            </div>
            <div>
                <CarrierQuote quote={rest}/>
            </div>
        </div>
    );
};

export default CarrierCardHeader;
