import React from 'react';
import Home from './components/HomeComponent';
import Search from './components/SearchComponent';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(this.state.books)
    })
  }

  render() {
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <Home />
        )}
      </div>
    )
  }
}

export default BooksApp
