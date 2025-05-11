
function Filter({ onCategoryFilter }) {
    return (
      <div className="filter-container">
        <label className="filter-label">
          Filter by Tag:&nbsp;
          <select name="filter" onChange={onCategoryFilter}>
            <option value="All">All</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
      </div>
    );
  }
  
  export default Filter;




// function Filter({ onCategoryFilter }) {
//   return (
//     <div>
//       <p>Filter by Tag</p>
//       <select name="filter" onChange={onCategoryFilter}>
//         <option value="All">All</option>
//         <option value="Full Stack">Full Stack</option>
//         <option value="Frontend">Frontend</option>
//         <option value="Backend">Backend</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;