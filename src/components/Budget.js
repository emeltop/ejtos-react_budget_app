import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
  }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
          alert("The budget value cannot exceed " + currency + "20000");
          setNewBudget(2000);
          dispatch({
            type: 'SET_BUDGET',
            payload: 2000,
          });
        } else {
          if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending "+ currency + totalExpenses);
            setNewBudget(2000);
            dispatch({
              type: 'SET_BUDGET',
              payload: 2000,
            });
          } else {
            setNewBudget(event.target.value);
            dispatch({
              type: 'SET_BUDGET',
              payload: event.target.value,
            });

          }
        }

        // setNewBudget(event.target.value);
    }
    return (
      <div className='alert alert-secondary'>
        <span>Budget: {currency}   </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
      </div>
    );
};
export default Budget;
