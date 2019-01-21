import './App.css'
import React from 'react';
import BookShelf from "./BookShelf";
import { Route } from 'react-router-dom';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  bookShelfChanged = (bookId, shelf) => {
    const book = this.state.books.filter(book => book.id === bookId)[0];
    BooksAPI.update(book, shelf).then(() => {
      this.fetchAll();
    });
  };

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
              <BookShelf
                  books={this.state.books}
                  bookShelfChanged={this.bookShelfChanged}
              />
          )}/>
          <Route path='/search' render={() => (
              <Search />
          )}/>
        </div>
    )
  }
}

export default BooksApp
