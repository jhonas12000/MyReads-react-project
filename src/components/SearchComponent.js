import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        
        const { filteredBooks, query } = this.state;
        const { moveBook, books } = this.props;
        console.log(this.props)
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
                {filteredBooks.map(filteredBook => {
                  const currentBook = books.find(book => book.id === filteredBook.id);

                  return (
                    <li key={filteredBook.id}>
                      <Book 
                        book={currentBook ? currentBook : filteredBook}
                        moveBook={moveBook}
                      />
                    </li>
                    
                  )})
                }
                
              </ol>
              
            </div>
          </div>
        );
    }
}

export default Search;