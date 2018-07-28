import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchBar extends Component {
    state = {
      query: ''
    }

    onInputChange = e => {
      this.setState({query: e.target.value})
    }

    searchBooks = (e) => {
      e.preventDefault()
      this.setState({query: ''})
      this.props.onSearch(this.state.query)
    }

  render() {
    return (
      <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.searchBooks}>
              <input type="text" placeholder="Search by title or author" onChange={this.onInputChange} value={this.state.query}/>
            </form>
          </div>
        </div>
    )
  }
}

export default SearchBar