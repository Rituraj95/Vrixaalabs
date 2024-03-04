import React, { useState } from 'react';
import './Searchbox.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBox() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleShow = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // You can implement your search logic here
  };

  return (
    <div className="search-box-container">
      <div className={showSearchBox ? "search-box show" : "search-boxx"}>
        <input
          type="text"
          id="box"
          placeholder="Search anything..."
          className="search__input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search__icon"
          onClick={toggleShow}
        />
      </div>
      {showSearchBox && (
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      )}
      <div>


      </div>

    </div>

  );
}

export default SearchBox;
