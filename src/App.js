/* 

can write export default function App() { directly like this or can give export default App() { and then write the function below it.

export default function App() {  
  return (
    <div className="App">
      <h1>I am from App Component</h1>  
    </div>
  );
} */

import "./App.css";
import Company from "./components/company/Company.js"; // Importing the Company component

function App() {
  return (
    <div className="container">
      <h1 className="main-title">I am from App Component</h1>
      <Company companyName="Google" details="You can search anything" />
      <Company companyName="Microsoft" details="You can explore anything" />
      <Company companyName="Meta" details="You can connect with anyone" />
      <Company>
        <div>
          <h4>
            I'm from App component, but I will load inside the company
            component
          </h4>
        </div>
      </Company>
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
