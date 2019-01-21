import './App.css'
import React from 'react';
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  state = {
    books: [
      {
        "id": "nggnmAEACAAJ",
        "shelf": "currentlyReading",
        "title": "The Linux Command Line",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "authors": [
          "William E. Shotts, Jr."
        ],
      },
      {
        "id": "sJf1vQAACAAJ",
        "shelf": "currentlyReading",
        "title": "Learning Web Development with React and Bootstrap",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "authors": [
          "Harmeet Singh",
        ],
      },
      {
        "id": "evuwdDLfAyYC",
        "shelf": "read",
        "title": "The Cuckoo's Calling",
        "authors": [
          "Robert Galbraith"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
      },
      {
        "id": "youWantThat",
        "shelf": "wantToRead",
        "title": "XXX ooo",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "authors": [
          "Ma Po To fu."
        ],
      },
      {
        "id": "iosdf12345",
        "shelf": "read",
        "title": "Hehehehhe",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "authors": [
          "AAA. BOOS"
        ],
      }
    ]
  };

  bookShelfChanged = (bookId, shelf) => {
    const updatedBooks = this.state.books.map(book => {
      if (book.id === bookId) {
        book.shelf = shelf;
      }
      return book;
    });

    this.setState({
      books: updatedBooks,
    });
  };

  render() {
    return (
      <div className="app">
        <BookShelf
            books={this.state.books}
            bookShelfChanged={this.bookShelfChanged}
        />
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp
