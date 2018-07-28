import React, { Component } from 'react';
import Home from './Components/Home'
import Search from './Components/Search'
import Danger from './Components/Danger'
import * as BooksAPI from './BooksAPI'
import {Route, Switch} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    this.getAllBooks()
  }

  state = {
    booksReading: [],
    booksRead: [],
    booksWaiting: [],
    myBooks: [],
    results: [],
    error: ''
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((res) => {
      let currentlyReading = res.filter(book => book.shelf === 'currentlyReading')
      let read = res.filter(book => book.shelf === 'read');
      let wantToRead = res.filter(book => book.shelf === 'wantToRead')
      this.setState({
        booksReading: currentlyReading,
        booksRead: read,
        booksWaiting: wantToRead,
        myBooks: res
      })
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((res) => {
      if(res.error) {
        this.setState({
          results: [],
          error: 'Somthing went wrong try again'
        })
      } else {
        this.setState({
          results: res,
          error: ''
        })
      }
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render={() => (
        <Home
          results={this.state}
          update={this.getAllBooks}
        />
        )} />
      <Route
        path='/search'
        render={() => (
          <Search
            onSearchBooks={(query) => {
              this.searchBooks(query)
            }}
            results={this.state.results}
            update={this.getAllBooks}
            myBooks={this.state.myBooks}
            error={this.state.error}
          />
          )}
      />
      <Route path="*" component={Danger} />
      </Switch>
      </div>
    );
  }
}

export default App;
