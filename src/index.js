import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Making compontent using React.Compinent class
//the Message would be called in ReactDOM.render as 
//a Tag name 

let bookList = [
  {"title" : "Good Morning", "author" : "Heorge Feil","pages" : 500},
  {"title" : "Good Afternoon", "author" : "Heorge Feil","pages" : 500},
  {"title" : "Good Night", "author" : "Heorge Feil","pages" : 500}
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By : {author}</p>
      <p> Pages : {pages} </p>
    </section>
  )
}
const Library = ({books}) => {
  return(
    <div>
      Welcome to Library
     {books.map(
       book =>  <Book title ={book.title} author = {book.author} pages ={book.pages} />
     )}
    </div>
  )
}

ReactDOM.render(
  <Library books={bookList} />,
  document.getElementById('root')
)


serviceWorker.unregister();
