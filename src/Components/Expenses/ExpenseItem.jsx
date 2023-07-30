import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  
  const clickHandler = () => {
    setTitle("Updated");

  }

  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
