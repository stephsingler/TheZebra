import React from 'react';

// type Props = {
//     quote: Object
// }

const CarrierQuote = props => {
    const { rate } = props.quote;
    return (
        <div>
            {rate && <p><strong>${rate.toFixed()}</strong> / mo</p>}
        </div>
    );
};

export default CarrierQuote;
