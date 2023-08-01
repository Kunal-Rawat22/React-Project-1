import "./ExpenseItems.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
export default function ExpenseItems({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');
  let expense;
  const getYearHandler = (changedYear) => {
    console.log(changedYear);
    setFilteredYear(changedYear)
    // const filteredExpenses = expenses.fiter(
    //   (expense) => expense.date.getFullYear() === filteredYear
    // );
    // expense = filteredExpenses;
  };
  return (
      <Card className="expenses">
        <ExpensesFilter
          onGetYear={getYearHandler}
          selectedYear={filteredYear}
        />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
          id={expenses[0].id}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
          id={expenses[1].id}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
          id={expenses[2].id}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
          id={expenses[3].id}
        />
      </Card>

  );
}
