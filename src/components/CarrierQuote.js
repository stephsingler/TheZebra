// @flow
import React from 'react';
//Material UI
import Fab from '@material-ui/core/Fab';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

type Props = {
    quote: Object
}

const CarrierQuote = (props: Props) => {
    const { rate, type, linkText, link, tag } = props.quote;
    const buttonColor = type < 2 ? 'blue-button' : 'orange-button';
    const buttonIcon = type < 2 ? <FlashOnIcon /> : ArrowDownwardIcon;
    const buttonText = linkText ? linkText : 'Buy Now';

    const handleButtonClick = () => {
        const url = `https://www.${link}`;
        window.open(url, '_blank');
    };

    return (
        <div className='carrier-quote'>
            {rate &&
                <p>
                    <span style={{fontSize: '12px', color: '#5c6cff', fontWeight: '700', marginRight: '7px'}}>{tag}</span>
                    <span style={{fontSize: '20px'}}>$</span><strong style={{fontSize: '28px', fontWeight: '400'}}>{rate.toFixed()}</strong><span style={{color: '#959595'}}> / mo</span>
                </p>
            }
            {type !== 2 &&
            <Fab
                variant='extended'
                className={`quote-button ${buttonColor}`}
                onClick={handleButtonClick}>
                {buttonText}
            </Fab>}
        </div>
    );
};

export default CarrierQuote;
