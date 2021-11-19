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
    if( query.length > 1){
      BooksAPI.search(query).then((data) => {
        console.log(data)
        if(!data.error){
          this.setState({filteredBooks: data})
        }
      })
    }
  }

  onChange = ({target : { value } }) => {
    this.setState({query : value})
    this.setFiltered(value);
  }  

    render() {
        console.log(this.state.query);
        console.log(this.state.filteredBooks);
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search" >Close</button>
              </Link>
              
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(evt) => this.onChange(evt)}
                />
                

              </div>
            </div>
            <div className="search-books-results">
              <BooksList books={this.state.filteredBooks} moveBook={this.props.moveBook}/>
            </div>
          </div>
        );
    }
}

export default Search;