import React from "react";

const DeleteContext = React.createContext({
  deleteExpense: () => {}
})

export default DeleteContext;