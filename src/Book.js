import React, {Component} from 'react'

class Book extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    //
    // handleChange(event) {
    //     this.props.onCategoryChange(event.target.value);
    // }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{ backgroundImage: `url(${this.props.imageUrl})` }} />
                    <div className="book-shelf-changer">
                        <select value={this.props.category} onChange={this.props.onCategoryChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" disabled>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        );
    }
}

export default Book