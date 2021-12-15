import React from 'react';
import Book from './BookComponent';


const BooksList = ({books, moveBook}) => { 
    console.log('Props', books) 
    return (
        <div className="bookshelf-books">
        <ol className="books-grid"> 
            {
            books.map(book => (
                <li key={book.id} >
                    <Book 
                        book={book}
                        moveBook={moveBook}
                        books={books}
                    />
                </li>
            ))
            }       
        </ol>
        </div>
    );
   
}

export default BooksList;