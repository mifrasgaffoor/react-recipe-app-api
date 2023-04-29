import React from 'react'

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <div className="searchbar">
       <div className="logo">
        <img className="logo" src="./logo.jpg" />
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={value}
          onChange={onChange}
          disabled={isLoading}
          type="text"
          placeholder="serach your meals"
        />
        <input type='submit' value='search' className="button"    />
      </form>
    </div>
  );
};
 
export default SearchBar