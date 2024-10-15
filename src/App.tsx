import { useState } from "react";

import "./App.css";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, description: "a", amount: 10, category: "Groceries" },
    { id: 2, description: "a2", amount: 10, category: "Utilities" },
    { id: 3, description: "a3", amount: 10, category: "Groceries" },
    { id: 4, description: "a4", amount: 10, category: "Entertainment" },
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
