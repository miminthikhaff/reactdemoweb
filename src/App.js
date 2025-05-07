/* 

can write export default function App() { directly like this or can give export default App() { and then write the function below it.

export default function App() {  
  return (
    <div className="App">
      <h1>I am from App Component</h1>  
    </div>
  );
} */

import './App.css';

function App() {  
  return (
    <div className="container">
      <h1 className='main-title'>I am from App Component</h1>  
    </div>
  );
}

export default App;


/* 

Writting class component in react

import React, { Component } from 'react';

class App extends Component {
  render() {  
    return (
      <div className="App">
        <h1>I am from App Component</h1>  
      </div>
    );
  }
}
export default App;

*/

