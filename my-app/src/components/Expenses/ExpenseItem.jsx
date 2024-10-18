import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    const { amount, date } = props;
    const [description, setDescription] = useState(props.description);

    const clickHandler = () => {
        setDescription("Новое название");
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">{description}</div>
            <div className="expense-item__price">{`$${amount}`}</div>
            <button type="button" onClick={clickHandler}>
                изменить название
            </button>
        </div>
    );
}

export default ExpenseItem;
