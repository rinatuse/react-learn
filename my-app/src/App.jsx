import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div className="App">
            <h2>Мои финансы</h2>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
