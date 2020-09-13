import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onSubmit(inputValue);
    this.resetValue();
  };

  resetValue = () => {
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
