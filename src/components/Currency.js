import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency)

    const setCurrency = (event) => {
        console.log(event.target.select);

        setNewCurrency(event.target.value);
        dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    }

    return (
      <div>
          <select className="custom-select mb-3" id="currency" onChange={setCurrency}>
              <option selected id='the' disabled hidden>Currency ({newCurrency} Pound)</option>
              <option value="$" name="Dollar" className='option'>$ Dollar</option>
              <option value="£" name="Pound" className='option'>£ Pound</option>
              <option value="€" name="Euro" className='option'>€ Euro</option>
              <option value="₹" name="Ruppee" className='option'>₹ Ruppee</option>
          </select>
      </div>
    );
};
export default Currency;

