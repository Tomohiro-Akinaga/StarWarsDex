import React from "react";
import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";

const SearchBar: React.FC = () => {
    return (
        <form className="form">
            <input type="text" className="input" />
            <button type="submit" className="btn">
                <BiSearch size={20} />
                Search
            </button>
        </form>
    );
};

export default SearchBar;
