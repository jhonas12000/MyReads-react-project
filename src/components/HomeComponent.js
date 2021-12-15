import React from 'react';
import BooksShelf from './BooksShelfComponent';
import OpenSearch from './OpenSearch';

const Home = (props) => {
    
      const { bookList, moveBook } = props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BooksShelf 
                books={bookList}
                moveBook={moveBook}
              />      
            </div>
              <OpenSearch />
          </div>
        );
    // }
}

export default Home;