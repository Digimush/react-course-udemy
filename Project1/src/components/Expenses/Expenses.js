import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedFilter, setFilter] = useState("All");

  const onFilterUpdatedHandler = (year) => {
    setFilter(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (selectedFilter === "All") return true;
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterUpdated={onFilterUpdatedHandler}
        selected={selectedFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
