import { useState } from "react";

import "./App.css";
import ExpenseList from "./expense-tracker/ExpenseList";

function App() {
  const [expense, setExpense] = useState([
    { id: 1, description: "a", amount: 10, category: "b" },
    { id: 2, description: "a2", amount: 10, category: "b" },
    { id: 3, description: "a3", amount: 10, category: "b" },
    { id: 4, description: "a4", amount: 10, category: "b" },
  ]);

  return (
    <>
      <ExpenseList expenses={expense} />
    </>
  );
}

export default App;
