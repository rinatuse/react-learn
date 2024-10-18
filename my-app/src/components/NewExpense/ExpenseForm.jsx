import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Название</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Дата</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2024-10-17"
                        lang="ru-RU"
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
