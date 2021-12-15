import React from 'react';
import BooksList from './BooksListComponent';

const BooksShelf = (props) => {

      console.log(props.books)
      const {books, moveBook} = props
      
        const SHELVES = [
          {
            title: 'Currently Reading',
            id: 'currentlyReading'
          },
          {
            title: 'Want To Read',
            id: 'wantToRead'
          },
          {
            title: 'Read',
            id: 'read'
          }
        ];
          
        const renderShelves = SHELVES.map(shelve => <div key={shelve.id}>
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelve.title}</h2>
                    <BooksList books={books.filter(book => book.shelf === shelve.id)} moveBook={moveBook}/>    
                </div>
          </div>)
        return (
            <div className="bookshelf">
                {renderShelves}
            </div>
        );
}
 export default BooksShelf;