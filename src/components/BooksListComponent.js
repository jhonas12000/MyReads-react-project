import React from 'react';
import Book from './BookComponent';


const BooksList = ({books}) => {   
    return (
        <div className="bookshelf-books">
        <ol className="books-grid"> 
            {
            books.map(book => (
                <li >
                    <Book 
                        key={book.id}
                        book={book}
                    />
                </li>
            ))
            }       
        </ol>
        </div>
    );
   
}

export default BooksList;