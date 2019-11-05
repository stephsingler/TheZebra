// @flow
import React from 'react';
//Material UI
import ListIcon from '@material-ui/icons/List';
import Typography from "@material-ui/core/Typography";

type Props = {
    featureList: Array<string>
}

const CarrierFeatureList = (props: Props) => {
    const renderFeatureList = () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = props.featureList[0];
        const list = wrapper.getElementsByTagName('ul')[0].childNodes;
        //Using this method instead of Object.entries b/c it doesn't have full browser support: https://caniuse.com/#search=object.entries
        return Object.keys(list).map((feature, index) => {
            return (
                <li key={index}>
                    {list[feature].innerText}
                </li>
            );
        })
    }
    return (
        <Typography style={{width: '100%'}}>
            <p className='card-header-sub-title'><ListIcon style={{fontSize: '24px', marginRight: '8px'}}/> Features</p>
            <div className='carrier-features'>
                <ul>
                    {renderFeatureList()}
                </ul>
            </div>
        </Typography>
    );
};

export default CarrierFeatureList;

