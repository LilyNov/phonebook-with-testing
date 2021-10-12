const FilterColumn = ({ column }) => {
    const {filterValue, setFilter} = column
    return (
      <label>
        Search bi IDID:
        <input type="text" value={filterValue || ''} onChange={(e) => setFilter(e.currentTarget.value)} />
      </label>
  )
}

export default FilterColumn