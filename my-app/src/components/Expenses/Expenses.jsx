import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
    return (
        <div>
            <ExpenseItem
                description={expenses[0].description}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                description={expenses[1].description}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                description={expenses[2].description}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </div>
    );
}

export default Expenses;
