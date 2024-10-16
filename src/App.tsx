import { useState } from "react";

import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, description: "Apples", amount: 10, category: "Groceries" },
    { id: 2, description: "Books", amount: 20, category: "Utilities" },
    { id: 3, description: "Celery", amount: 10, category: "Groceries" },
    { id: 4, description: "AirPods", amount: 50, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;

  return (
    <>
      <div className="mb-5">
        <h1 className="text-center">Expense Tracker</h1>
      </div>
      <div className="row border border-info rounded p-5">
        <div className="col-md-6">
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(newExpense) =>
                setExpense([
                  ...expense,
                  { ...newExpense, id: expense.length + 1 },
                ])
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <ExpenseFilter
              onSelectedCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <div className="mt-3">
            <ExpenseList
              expenses={visibleExpenses}
              onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
