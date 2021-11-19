import React from 'react';



const Book = ({book, moveBook}) => {
const getSelected = () => {
    if (book.shelf === 'currentlyReading' || book.shelf === 'wantToRead' || book.shelf === 'read') {
        return book.shelf
    }
    return 'none'
}

const value = getSelected()
const thumbnail = book.imageLinks && book.imageLinks.thumbnail || '';
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select 
                    value = {value}
                    onChange={(event) => moveBook(book, event.target.value)}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book && book.authors && book.authors.join(', ')}</div>
        </div>
    )
}

export default Book;