import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="search">
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
        <select className="option" name="Category" id="Category">
          <option value="">Electronics</option>
        </select>
        <select className="option" name="Brand" id="Brand">
          <option value="">Apple</option>
        </select>
        <select className="option" name="Sort" id="Sort">
          <option value="">By Rating</option>
          <option value="">By Price</option>
        </select>
      </div>
    </div>
  );
}
export default Header;
