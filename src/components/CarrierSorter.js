// @flow
import React, { useState } from 'react';
//Material UI;
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CarrierSorter = () => {
    const [selected, setSelected] = useState('price');

    const handleChange: Function = e => {
        setSelected(e.target.value);
    };
    return (
        <FormControl variant="outlined" style={{width: '100px'}}>
            <Select
                value={selected}
                onChange={handleChange}
            >
                <MenuItem value='price'>Price</MenuItem>
                <MenuItem value='rating'>Rating</MenuItem>
                <MenuItem value='alphabetical'>Alphabetical</MenuItem>
            </Select>
        </FormControl>

    );
};

export default CarrierSorter;
