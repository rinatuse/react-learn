import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    const { description, amount, date } = props;
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">{description}</div>
            <div className="expense-item__price">{amount}</div>
        </div>
    );
}

export default ExpenseItem;
