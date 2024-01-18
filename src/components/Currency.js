import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value // If you use "newCurrency" here then the value will weirdly be updated 1 step late
        });
    };

    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" defaultValue={newCurrency} onChange={handleCurrencyChange}>
                <option value='$' name='$'>$ Dollar</option>
                <option value='£' name='£'>£ Pound</option>
                <option value='€' name='€'>€ Euro</option>
                <option value='₹' name='₹'>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;