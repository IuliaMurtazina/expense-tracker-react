import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import DeleteContect from "./store/delete-context";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesData = JSON.parse(localStorage.getItem("expenses"));

    if (expensesData) setExpenses(expensesData);
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const deleteExpenseHandler = (expenseID) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseID
      );
      localStorage.removeItem("expenses");
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <DeleteContect.Provider value={{ deleteExpense: deleteExpenseHandler }}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </DeleteContect.Provider>
  );
};

export default App;
