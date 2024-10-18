import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpense }) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // const inputChangeHandler = (type, value) => {
    //     if (type === "title") {
    //         setUserInput((prevInput) => {
    //             return { ...prevInput, enteredTitle: value };
    //         });
    //     } else if (type === "amount") {
    //         setUserInput((prevInput) => {
    //             return { ...prevInput, enteredAmount: value };
    //         });
    //     } else {
    //         setUserInput((prevInput) => {
    //             return { ...prevInput, enteredDate: value };
    //         });
    //     }
    // };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
        };

        onSaveExpense(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Название</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Сумма</label>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Дата</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2024-10-17"
                        lang="ru-RU"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Добавить</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
