function Header() {
  return (
    <div className="header">
      <div>
        <input
          className="searchInput"
          type="text"
          id="search"
          name="Search"
          placeholder="Search"
        />
        <button className="searchBtn">Search</button>
      </div>
      <div className="options">
        <select name="Category" id="Category">
          <option value="">Electronics</option>
        </select>
        <select name="Brand" id="Brand">
          <option value="">Apple</option>
        </select>
        <select name="Sort" id="Sort">
          <option value="">By Rating</option>
          <option value="">By Price</option>
        </select>
      </div>
    </div>
  );
}
export default Header;
