

function Filter({ onCategoryFilter }) {
  return (
    <div>
      <h4>Filter by Tag</h4>
      <select name="filter" onChange={onCategoryFilter}>
        <option value="All">All</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
      </select>
    </div>
  );
}

export default Filter;
