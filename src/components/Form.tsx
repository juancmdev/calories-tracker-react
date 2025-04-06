import { categories } from "../data/categories";

export default function Form() {
  return (
    <form className="space-y5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map((category) => (
            <option>{category.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
