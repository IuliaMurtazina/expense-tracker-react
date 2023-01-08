import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-US", {
    month: "long",
  });
  const day = new Date(props.date).toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = new Date(props.date).getFullYear();

  return (
    <div className="expense-date">
      <span className="expense-date__month">{month}</span>
      <span className="expense-date__year">{year}</span>
      <span className="expense-date__day ">{day}</span>
    </div>
  );
}

export default ExpenseDate;
