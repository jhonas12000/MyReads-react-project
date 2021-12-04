import React from 'react';
import Book from './BookComponent';


const BooksList = ({books, moveBook}) => {  
    return (
        <div className="bookshelf-books">
        <ol className="books-grid"> 
            {
            books.map(book => (
                <li key={book.id} >
                    <Book 
                        //key={book.id}
                        book={book}
                        moveBook={moveBook}
                        
                    />
                </li>
            ))
            }       
        </ol>
        </div>
    );
   
}

export default BooksList;