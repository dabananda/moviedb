import React from 'react';
import './search-box.scss';

const SearchBox = props => {
  const { value, handleChange, handleMovie } = props;

  return (
    <div className="mx-auto mt-2 mb-5 search-box">
      <h1 className="text-center mb-3">Movie DataBase</h1>
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Search movie name..."
          value={value}
          onChange={event => handleChange(event)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              props.handleMovie();
            }
          }}
        />
        <button className="btn btn-primary" onClick={() => handleMovie()}>
          <i className="bi bi-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
