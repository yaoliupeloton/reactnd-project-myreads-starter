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

        BooksAPI.search(query).then(books => {
            this.setState({
                searchRes: books.filter(it => it.imageLinks && it.imageLinks.thumbnail && it.authors && it.authors.length > 0),
            });
        });
    };

    render() {

        const {query, searchRes} = this.state;

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
                        {searchRes.map(book => (
                            <li key={book.id}>
                                <Book
                                    imageUrl={book.imageLinks.thumbnail}
                                    title={book.title}
                                    author={book.authors[0]}
                                    shelf={book.shelf}
                                    onShelfChanged={(e) => {}} //props.bookShelfChanged(book.id, e.target.value)
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search