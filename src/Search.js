import React from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class Search extends React.Component {

    state = {
        query: '',
        searchRes: [],
    };

    updateQuery = (query) => {
        console.log(`updated query: ${query}`);
        this.setState({ query: query.trim()});

        if (query) {
            BooksAPI.search(query).then(books => {
                if (books.length > 0) {
                    this.setState({
                        searchRes: books.filter(it => it.imageLinks && it.imageLinks.thumbnail && it.authors && it.authors.length > 0),
                    });
                } else {
                    this.clearSearchRes();
                }
            });
        } else {
            this.clearSearchRes();
        }
    };

    clearSearchRes = () => {
        this.setState({
            searchRes: [],
        });
    };

    render() {

        const {query, searchRes} = this.state;
        const myBooks = this.props.myBooks;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" />
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchRes.map(book => {
                            const booksOnMyShelf = myBooks.filter(myBook => myBook.id === book.id);
                            book.shelf = booksOnMyShelf.length > 0 ? booksOnMyShelf[0].shelf : "none";
                            return (
                                <li key={book.id}>
                                    <Book
                                        data={book}
                                        onShelfChanged={(e) => {this.props.bookShelfChanged(book, e.target.value)}}
                                    />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search