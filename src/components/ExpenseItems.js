import React from "react";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.description}</h2>
        <div className="expense-item__price">{props.rupees}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
