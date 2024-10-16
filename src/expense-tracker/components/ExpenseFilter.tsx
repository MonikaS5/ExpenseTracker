import React, { useState } from "react";
import categories from "../categories";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectedCategory(category);
  };

  const handleResetCategories = () => {
    setSelectedCategory("");
    onSelectedCategory("");
  };
  return (
    <div>
      <select
        name="expenseFilter"
        value={selectedCategory}
        className="form-control"
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        {/* <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option> */}
      </select>
      <button
        className="btn btn-secondary mt-3"
        onClick={handleResetCategories}
      >
        Reset Categories
      </button>
    </div>
  );
};

export default ExpenseFilter;
