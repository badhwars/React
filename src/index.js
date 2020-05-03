import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Making compontent using React.Compinent class
//the Message would be called in ReactDOM.render as 
//a Tag name 

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By : {author}</p>
      <p> Pages : {pages} </p>
    </section>
  )
}
const Library = () => {
  return(
    <div>
      Welcome to Library
      <Book title="the sun rises" author="ABC LID" pages={500}/>
      <Book title="Harry Potter" author="GSUW" pages={400}/>
      <Book title="Road less travelled" author="Harry George" pages={200}/>
      <Book title="Lion King" author="Madam Nook" pages={100}/>
    </div>
  )
}

ReactDOM.render(
  <Library />,
  document.getElementById('root')
)


serviceWorker.unregister();
