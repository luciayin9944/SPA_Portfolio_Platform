

function Filter({ onCategoryFilter }) {
  return (
    <div className="Filter">
      <input type="text" 
             name="search" 
             placeholder="Search..."
             value={search}
      />

      <select name="filter" onChange={onCategoryFilter}>
        <option value="All">Filter by tag</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
