export const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
    return (
        <input
            className="search-bar"
            type="text"
            placeholder={placeholder || "Search..."}
            value={searchTerm}
            onChange={(e) => onSearchChange(e)}
        />
    );
}