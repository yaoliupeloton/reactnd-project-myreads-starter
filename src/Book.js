import React from 'react'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{ backgroundImage: `url(${props.data.imageLinks.thumbnail})` }} />
                <div className="book-shelf-changer">
                    <select value={props.data.shelf} onChange={props.onShelfChanged}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.data.title}</div>
            <div className="book-authors">{props.data.authors.map(author => (`${author}; `))}</div>
        </div>
    );
}

export default Book