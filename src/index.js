import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Making compontent using React.Compinent class
//the Message would be called in ReactDOM.render as 
//a Tag name 

let skiData = {
  total: 50,
  powder: 20,
  backCountry:15,
  goal: 100
}

class SkiDayCounter extends React.Component{
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }
  render(){
    const { total, powder, backCountry, goal} = this.props
    return(
      <section>
        Ski Days
        <p>Total days :{total}</p>
        <p>Powder Days :{powder}</p>
        <p>Back Country :{this.props.backCountry}</p>
        <p> Goal : {this.calcGoalProgress(total,goal)}</p>
      </section>
    )
  }
}
class Message extends React.Component{
  render(){
    return(
      <div style = {style}>
        <h1 style={{color: this.props.color}}> {this.props.msg}</h1>
        <p>
          Checking props {this.props.minutes}
        </p>
      </div>
    )
  }
}
var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily:'Arial'
}

const title = React.createElement(
  'h1',
  {id: 'title',className:'header', style:style},
  'Hello World'
)


const list = React.createElement(
  'ul',
  {},
  'This is item'
)
// using JSX syntax with 
ReactDOM.render(
  <div style ={style}>   // using style 
    <h1> Hello World</h1>
    <p> Gald you are here</p>
  </div>,
  document.getElementById('root')
)


ReactDOM.render(
 <SkiDayCounter
 total = {skiData.total}
 powder={skiData.powder}
 backCountry = {skiData.backCountry}
 goal = {skiData.goal}
 />,
 document.getElementById('root')
)



// ReactDOM.render(
//   <Message color="blue" msg="how are you?" minutes={50}/>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <div style ={style}>   // using style 
//     <h1> Hello World</h1>
//     <p> Gald you are here</p>
//   </div>,
//   document.getElementById('root')
// )


// ReactDOM.render(title,
//   document.getElementById('root'));

// ReactDOM.render(list,
//   document.getElementById('root'));


serviceWorker.unregister();
