import React, { Component } from 'react';
import Home from './Components/Home'
import Search from './Components/Search'
import Danger from './Components/Danger'
import BookInfo from './Components/BookInfo'
import * as BooksAPI from './BooksAPI'
import {Route, Switch} from 'react-router-dom'


class App extends Component {
  state = {
    booksReading: [],
    booksRead: [],
    booksWaiting: [],
    myBooks: [],
    results: [],
    book: {},
    error: ''
  };

  componentDidMount() {
    this.getAllBooks();
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((res) => {
      const currentlyReading = res.filter(book => book.shelf === 'currentlyReading')
      const read = res.filter(book => book.shelf === 'read');
      const wantToRead = res.filter(book => book.shelf === 'wantToRead')
      this.setState({
        booksReading: currentlyReading,
        booksRead: read,
        booksWaiting: wantToRead,
        myBooks: res
      });
    }).catch((err) => {
      console.error(err)
    });
  };

  searchBooks = (query) => {
    BooksAPI.search(query).then((res) => {
      if(res.error === 'empty query') {
        this.setState({
          results: [],
          error: 'Your search does not match the required terms'
        })
      } else {
        this.setState({
          results: res,
          error: ''
        })
      }
    }).catch((err) => {
      console.error(err)
    });
  };

  getBook = (bookID) => {
    BooksAPI.get(bookID).then((res) => {
      console.log(res)
      if(res.error === 'empty query') {
        this.setState({
          book: {},
          error: 'No Book Found'
        })
      } else {
        this.setState({
          book: res,
          error: ''
        })
      }
    }).catch((err) => {
      console.error(err)
    });
  }

  clearSearch = () => {
    this.setState({results: []})
  }

  render() {
    const { results, error, myBooks, book } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              results={this.state}
              update={this.getAllBooks}
              getBook={this.getBook}
              bookInfo={book}
            />
            )} />
          <Route
            path='/search'
            render={() => (
              <Search
                onSearchBooks={this.searchBooks}
                searchResults={results}
                update={this.getAllBooks}
                myBooks={myBooks}
                error={error}
                onClear={this.clearSearch}
                getBook={this.getBook}
                bookInfo={book}
              />
            )}
          />
          <Route
            path='/book'
            render={() => (
              <BookInfo
                bookInfo={book}
                myBooks={myBooks}
                error={error}
              />
            )}
          />
          {/* If the route is anything besides the above routes show the danger page */}
          <Route path="*" component={Danger} />
        </Switch>
      </div>
    );
  }
}

export default App;
