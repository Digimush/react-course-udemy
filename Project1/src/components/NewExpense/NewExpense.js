import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isFormShown, setIsFormShown] = useState(false);

  const onSaveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setIsFormShown(false);
  };

  const onAddNewExpanseHandler = () => {
    setIsFormShown(true);
  };

  const onExpenseFormCancel = () => {
    setIsFormShown(false);
  };

  return (
    <div className="new-expense">
      {!isFormShown && (
        <button type="button" onClick={onAddNewExpanseHandler}>Add New Expense</button>
      )}
      {isFormShown && (
        <ExpenseForm
          onCancel={onExpenseFormCancel}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
