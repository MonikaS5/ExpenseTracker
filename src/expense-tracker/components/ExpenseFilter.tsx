import categories from "../categories";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <div>
      <select
        name="expenseFilter"
        id=""
        className="form-control"
        onChange={(event) => onSelectedCategory(event.target.value)}
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
    </div>
  );
};

export default ExpenseFilter;
