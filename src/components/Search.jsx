import { useState } from "react";

export default function Search({ recipes }) {
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handlerSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.titolo.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="search">
      <h3>La tua preferita?</h3>
      <div>
        <input
          type="search"
          value={search}
          placeholder="Chi cerca..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="button" onClick={handlerSearch}>
          ...trova
        </button>
      </div>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.titolo}</li>
        ))}
      </ul>
    </div>
  );
}
