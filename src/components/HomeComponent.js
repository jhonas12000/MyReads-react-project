import React, { Component } from 'react';
import BooksShelf from './BooksShelfComponent';
import OpenSearch from './OpenSearch';

class Home extends Component {
    render() {
      console.log(this.props.bookList)
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BooksShelf books={this.props.bookList}/>      
            </div>
              <OpenSearch />
          </div>
        );
    }
}

export default Home;