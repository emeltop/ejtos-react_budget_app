import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
      const expense = {
          name: name,
          cost: 10,
      };

      dispatch({
          type: 'RED_EXPENSE',
          payload: expense
      });

    }

    return (
        <tr>
          <td>{props.name}</td>
          <td>{currency}{props.cost}</td>
          <td><img src={require("./bouton-plus.png")} alt="buttonpng" border="0" className='image' onClick={event=> increaseAllocation(props.name)}/></td>
          <td><img src={require("./bouton-moins.png")} alt="buttonminuspng" border="0" className='image' onClick={event=> decreaseAllocation(props.name)}/></td>
          <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
          {/* style={{'backgroundColor':'lightGreen', 'color' : 'white', 'borderRadius':'50%'}} */}
        </tr>
    );
};

export default ExpenseItem;

