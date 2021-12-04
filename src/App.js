import React from 'react';
import Home from './components/HomeComponent';
import Search from './components/SearchComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  
  state = {
    
    books: []
    
  }
  
  componentDidMount() {
     this.syncApiWithState();
  }

  syncApiWithState = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }
  moveBook = (book, shelf) => {

    BooksAPI.update(book, shelf).then((data) => {

      if(data){

        const {books} = this.state;
        const newBooks = books.map((current) => {
          if(current.id === book.id){
            return {
              ...current, 
              shelf
            }
          }else{
            return current;
          }
        })
        this.setState({books: newBooks})

      }

    });
    
  };

  render() {
    
    return (
      <div className='app'>
        <Router>
          
          <Routes>
            
              <Route 
                path={'/'} 
                element={ <Home bookList={this.state.books} moveBook={this.moveBook} syncApiWithState={this.syncApiWithState}/>} 
              />
    
              <Route path={'/search'}element={ <Search bookList={this.state.books} books={this.state.books} moveBook={this.moveBook} book={this.state.book}/>} />
                
          </Routes>
          
        </Router>
      </div>
    )
  }
}

export default BooksApp
