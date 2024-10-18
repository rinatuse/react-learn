import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ description, amount, date }) {
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">{description}</div>
            <div className="expense-item__price">{`$${amount}`}</div>
        </div>
    );
}

export default ExpenseItem;
