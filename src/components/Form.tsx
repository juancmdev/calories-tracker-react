import { useState } from "react";
import { categories } from "../data/categories";

export default function Form() {
  const [activity, setActivity] = useState({
    category: "",
    name: "",
    calories: 0,
  });

  const handleChange = () => {
    console.log("handleChange");
    // Aquí puedes manejar el cambio de los inputs
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, pesas, bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="Calories" className="font-bold">
          Calorías:
        </label>
        <input
          id="Calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorías. Ej. 200, 300, 400"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value={"Guardar comida o guardar ejercicio"}
      />
    </form>
  );
}
