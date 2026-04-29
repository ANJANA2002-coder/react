function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by book or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;