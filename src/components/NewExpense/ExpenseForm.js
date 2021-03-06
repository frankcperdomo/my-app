import React  from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input typoe="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input typoe="text" min='0.01' step='0.01' />
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input typoe="text" min="2019-01-01" max="2022-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );

};

export default ExpenseForm;