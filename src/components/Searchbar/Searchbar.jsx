import { React, useState } from 'react';

export default function SubmitHandler({ onSubmit }) {
  const [value, setValue] = useState('');

  const SubmitHandler = e => {
    e.preventDefault();
    console.log(' перед отправкой', value);
    onSubmit(value.trim().toLowerCase());
    setValue('');
  };
  const changeHandler = e => {
    setValue(e.target.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={SubmitHandler}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          onChange={changeHandler}
          value={value}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
