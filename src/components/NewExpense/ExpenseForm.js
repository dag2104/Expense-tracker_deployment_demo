import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // use state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //multiple states vs single state
  //   const [userInput, setUserInput] = useState({
  //     setEnteredTitle: "",
  //     setEnteredAmount: "",
  //     setEnteredDate: "",
  //   });
  // passing object in useState instead of multiple useState

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // using spread operator and changing only one of the three values
    // setUserInput({
    //   ...userInput,
    //   setEnteredTitle: event.target.value,
    // });
    // when current state depends on previous state do like this
    // setUserInput((prevState) => {
    //   return { ...prevState, setEnteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // });
  };

  // to handle submit button event
  const submitHandler = (event) => {
    // preventin page from reloading
    event.preventDefault();

    //creating new expense date object with updated values
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
