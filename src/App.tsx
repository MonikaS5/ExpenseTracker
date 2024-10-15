import { useState } from "react";

import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

export const categories = ["Groceries", "Utilities", "Entertainment"];

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
    </>
  );
}

export default App;
