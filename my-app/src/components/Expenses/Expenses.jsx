import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
    return (
        <div>
            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
