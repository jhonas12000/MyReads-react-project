import React, { Component } from 'react';
import BooksShelf from './BooksShelfComponent';
import OpenSearch from './OpenSearch';

class Home extends Component {
    componentDidMount(){
      this.props.syncApiWithState()
    }
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BooksShelf books={this.props.bookList} moveBook={this.props.moveBook}/>      
            </div>
              <OpenSearch />
          </div>
        );
    }
}

export default Home;