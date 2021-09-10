import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ searchTerm, onSearchChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="searchTerm">Search Term</label>
    <input
      id="searchTerm"
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
    />
    <button aria-label="search-articles">Search</button>
  </form>
);

SearchControls.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchControls;

