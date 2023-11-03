import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency)

    const setCurrency = (event) => {
        const value = event.target.getAttribute('value');
        setNewCurrency(value);
        dispatch({
          type: 'CHG_CURRENCY',
          payload: value,
        });
    }

    function getName(currency) {
      switch(currency) {
        case '$':
          return "Dollar";
        case '£':
          return "Pound";
        case '€':
          return "Euro";
        case '₹':
          return "Ruppee";
        default:
          return "Pound";
      }
    }

    // function setCurrency(curr ) {

    //   return
    // }

    return (
      <div>
          {/* <select className="custom-select mb-3" id="currency" onChange={setCurrency}>
              <option selected id='the' disabled hidden>Currency ({newCurrency} Pound)</option>
              <option value="$" name="Dollar" className='option'>$ Dollar</option>
              <option value="£" name="Pound" className='option'>£ Pound</option>
              <option value="€" name="Euro" className='option'>€ Euro</option>
              <option value="₹" name="Ruppee" className='option'>₹ Ruppee</option>
          </select> */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={{'backgroundColor':'lightGreen', 'border':'0'}}>
              Currency ({newCurrency} {getName(newCurrency)})
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item onClick={setCurrency} value="$" name="Dollar">$ Dollar</Dropdown.Item>
              <Dropdown.Item onClick={setCurrency} value="£" name="Pound">£ Pound</Dropdown.Item>
              <Dropdown.Item onClick={setCurrency} value="€" name="Euro">€ Euro</Dropdown.Item>
              <Dropdown.Item onClick={setCurrency} value="₹" name="Ruppee">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    );
};
export default Currency;

