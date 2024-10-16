import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
    const expenses = [
        {
            id: 1,
            date: new Date(2023, 6, 27),
            description: "Шаурма",
            amount: 4.13,
        },
        {
            id: 2,
            date: new Date(2023, 6, 28),
            description: "Кофе",
            amount: 2.5,
        },
        {
            id: 3,
            date: new Date(2023, 6, 29),
            description: "Бар",
            amount: 12.99,
        },
    ];

    return (
        <div className="App">
            <h2>Мои финансы</h2>
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

export default App;
