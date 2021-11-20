import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksListComponent';
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

  state = {
    query: '',
    filteredBooks: []
  }

  setFiltered = (query) => {
    console.log({query})
    if( query.length > 0){
      BooksAPI.search(query).then((data) => {
        console.log(data)
        if(!data.error){
          this.setState({filteredBooks: data})
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
        return (
            <div className="search-books">
            <div className="search-books-bar">
             <Link to='/'>
              <button className="close-search"  >Close</button> 
             </Link>
                
              
              <div className="search-books-input-wrapper">
                
                <input 
                  type="text" placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(evt) => this.onChange(evt)}
                />
                

              </div>
            </div>
            <div className="search-books-results">
              <BooksList 
                books={this.state.filteredBooks} 
                moveBook={this.props.moveBook}
                value={this.props.value}
              />
            </div>
          </div>
        );
    }
}

export default Search;