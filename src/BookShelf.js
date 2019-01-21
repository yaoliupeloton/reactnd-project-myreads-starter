import React from 'react';
import Shelf from "./Shelf";
import { Link } from 'react-router-dom';

class BookShelf extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf shelfTitle={"Currently Reading"}
                               shelf={"currentlyReading"}
                               books={this.props.books}
                               bookShelfChanged={this.props.bookShelfChanged}/>

                        <Shelf shelfTitle={"Want to Read"}
                               shelf={"wantToRead"}
                               books={this.props.books}
                               bookShelfChanged={this.props.bookShelfChanged}/>

                        <Shelf shelfTitle={"Read"}
                               shelf={"read"}
                               books={this.props.books}
                               bookShelfChanged={this.props.bookShelfChanged}/>
                    </div>
                </div>
                <Link to='/search' className="open-search"><button>Add a book</button></Link>
            </div>
        );
    }
}

export default BookShelf