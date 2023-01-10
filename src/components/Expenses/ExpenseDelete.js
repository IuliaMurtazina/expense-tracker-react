import React, {useContext} from "react";
import DeleteContext from "../../store/delete-context";

const ExpenseDelete = (props) => {

  const context = useContext(DeleteContext)

  const deleteExpenseCancel = () => {
    props.onEditExpense(false);
  };

  const deleteExpenseConfirm = () => {
    props.onEditExpense(false);
    context.deleteExpense(props.id)
  };

  return (
    <div className="expense-delete">
      <p className="expense-delete__text">Do you want to delete expense?</p>
      <button className="expense-delete__button" onClick={deleteExpenseCancel}>
        No
      </button>
      <button className="expense-delete__button" onClick={deleteExpenseConfirm}>
        Yes
      </button>
    </div>
  );
};

export default ExpenseDelete;
