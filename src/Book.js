import React from 'react'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{ backgroundImage: `url(${props.imageUrl})` }} />
                <div className="book-shelf-changer">
                    <select value={props.shelf} onChange={props.onShelfChanged}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none" disabled>None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.author}</div>
        </div>
    );
}

export default Book