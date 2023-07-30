import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enterPrice, setEnteredPrice] = useState("");
  //   const [enterDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const titleHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   EnteredTitle: event.target.value,
    // });
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };

  const priceHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredPrice: event.target.value,
    }));
  };

  const dateHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" onChange={priceHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
