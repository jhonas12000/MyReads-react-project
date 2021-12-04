import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import BooksList from './BooksListComponent';
import Book from './BookComponent';
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

  state = {
    query: '',
    filteredBooks: []
  }

  setFiltered = (query) => {
    
    console.log({query})
    if( query.length > 0){
      BooksAPI.search(query).then((books) => {
        console.log(books)
        if(!books.error){
          this.setState({filteredBooks: books})
        } else {
          this.setState({filteredBooks: []})
        }
      })
    } else {
      return this.setState({filteredBooks: []})
    }
  }

  onChange = ({target : { value } }) => {
    this.setState({query : value})
    this.setFiltered(value);
  }

  
  
    render() {
        console.log(this.props)
        const { filteredBooks, query } = this.state;
        const { books, moveBook } = this.props;
        return (
            <div className="search-books">
            <div className="search-books-bar">
             <Link to='/'>
              <button className="close-search"  >Close</button> 
             </Link>
                
              
              <div className="search-books-input-wrapper">
                
                <input 
                  type="text" placeholder="Search by title or author"
                  value={query}
                  onChange={(evt) => this.onChange(evt)}
                />
                

              </div>
            </div>
            <div className="search-books-results">
              <ol className='books-grid'>
                {filteredBooks.map(book => (
                  <Book 
                    book={book}
                    books={books}
                    key={book.id}
                    moveBook={moveBook}
                  />
                ))}
              </ol>
              
            </div>
          </div>
        );
    }
}

export default Search;