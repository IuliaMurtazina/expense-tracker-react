import "./ExpenseForm.scss";
import React, { useState, useRef} from "react";

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);

  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.value,
  //   // });
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);

  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: event.target.value,
  //   // });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    titleInputRef.current.value = ('')
    amountInputRef.current.value = ('')
    dateInputRef.current.value = ('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__label">Title</label>
          <input
            className="new-expense__input"
            type="text"
            ref={titleInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label">Amount</label>
          <input
            className="new-expense__input"
            type="number"
            min="0.01"
            step="0.01"
            ref={amountInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__label">Date</label>
          <input
            className="new-expense__input"
            type="date"
            min="2017-01-01"
            max="2023-12-31"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className="new-expense__button" type="button" onClick={props.onCancel}>Cancel</button>
        <button className="new-expense__button" type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
