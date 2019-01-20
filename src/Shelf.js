import React from 'react'
import Book from "./Book";

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.filter(book => book.shelf === props.shelf).map(book => (
                            <li key={book.id}>
                                <Book
                                    imageUrl={book.imageLinks.thumbnail}
                                    title={book.title}
                                    author={book.authors[0]}
                                    shelf={book.shelf}
                                    onShelfChanged={(e) => {props.bookShelfChanged(book.id, e.target.value)}}
                                />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
}

export default Shelf