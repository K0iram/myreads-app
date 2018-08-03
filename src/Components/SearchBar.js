import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class SearchBar extends Component {
    state = {
      query: ''
    };

    componentWillUnmount() {
      this.clearSearchFields();
    };

    onInputChange = e => {
      e.preventDefault();
      const value = e.target.value
      this.setState({query: value})

      value.trim() === '' ? (
        this.props.onClear()
      ):(
        this.props.onSearch(this.state.query)
      )
    };

    clearSearchFields = () => {
      this.setState({query: ''});
      this.props.onClear();
    };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.searchBooks}>
            <input
              type="text"
              placeholder="Enter title or author and press enter"
              onChange={this.onInputChange}
              value={this.state.query}
            />
          </form>
        </div>
      </div>
    )
  };
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;