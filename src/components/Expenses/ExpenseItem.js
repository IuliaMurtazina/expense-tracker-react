import ExpenseDate from "./ExpenseDate";
import ExpenseDelete from "./ExpenseDelete";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  const [editExpense, setEditExpense] = useState(false);

  const startEditExpense = (e) => {
    const clicked = e.target.closest('.expense-item')
    if(!clicked) return;

    setEditExpense(true);
    console.log(editExpense);
  };

  const handleEditExpense = (newValue) => {
    setEditExpense(newValue)
  }

  return (
    <li onClick={startEditExpense}>
      {editExpense && <ExpenseDelete onEditExpense={handleEditExpense} id={props.id} onDeleteExpense={props.onDeleteExpense}/>}
      {!editExpense && (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2 className="expense-item__title">{props.title}</h2>
            <p className="expense-item__amount">${props.amount}</p>
          </div>
        </Card>
      )}
    </li>
  );
};

export default ExpenseItem;
