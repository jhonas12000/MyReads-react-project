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
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(this.state.books)
    })
  }

  render() {
    
    return (
      <div claaName='app'>
      <Router>
        
        <Routes>
           
            <Route path={'/'} element={ <Home bookList={this.state.books}/>} />
              
            
            <Route path={'/search'}element={ <Search bookList={this.state.books}/>} />
              
            
            
        </Routes>
        
      </Router>
      </div>
    )
  }
}

export default BooksApp
