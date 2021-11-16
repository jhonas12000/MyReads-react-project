import React, { Component } from 'react';
import BooksList from './BooksListComponent';

class BooksShelf extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BooksList />    
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BooksList />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BooksList />
                </div>
              </div>
        );
    }
}

export default BooksShelf;