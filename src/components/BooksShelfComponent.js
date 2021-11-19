import React, { Component } from 'react';
import BooksList from './BooksListComponent';

class BooksShelf extends Component {
    render() {
        console.log(this.props.books)
        const {books, moveBook} = this.props
        const currentBooks = books.filter(book => book.shelf === 'currentlyReading')
        const wantBooks = books.filter(book => book.shelf === 'wantToRead')
        const readBooks = books.filter(book => book.shelf === 'read')
        
        return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BooksList books={currentBooks} moveBook={moveBook}/>    
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BooksList books={wantBooks} moveBook={moveBook}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BooksList books={readBooks} moveBook={moveBook}/>
                </div>
              </div>
        );
    }
}

export default BooksShelf;