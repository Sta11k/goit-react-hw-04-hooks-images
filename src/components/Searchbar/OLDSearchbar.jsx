import { React, Component } from 'react';
class Searchbar extends Component {
  state = {
    value: '',
  };

  SubmitHandler = e => {
    e.preventDefault();
    console.log(' перед отправкой', this.state.value);
    this.props.onSubmit(this.state.value.trim().toLowerCase());
    this.setState({ value: '' });
  };
  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchQuery !== this.props.searchQuery)
  //     console.log('get Fetch');
  // }
  render() {
    const { value } = this.state;
    console.log(value);
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.SubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={this.changeHandler}
            value={value}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
