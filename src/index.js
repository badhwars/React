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
class Library extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: true
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }
  toggleOpenClosed() {
    this.setState({
      open: !this.state.open
      
    })
  }
  render() {
  
  const { books } = this.props
  return(
    <div>
      Welcome to Library
      <h2> Library is {this.state.open ? 'open' : 'closed'}</h2>
     {books.map(
       (book,i) =>  <Book key ={i} title ={book.title} author = {book.author} pages ={book.pages} />
     )}

     <button onClick = {this.toggleOpenClosed}>Change</button>
    </div>
  )
}
}

ReactDOM.render(
  <Library books={bookList} />,
  document.getElementById('root')
)


serviceWorker.unregister();
