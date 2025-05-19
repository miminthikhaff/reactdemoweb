/* 

can write export default function App() { directly like this or can give export default App() { and then write the function below it.

export default function App() {  
  return (
    <div className="App">
      <h1>I am from App Component</h1>  
    </div>
  );
} */

import { useState } from "react";
import "./App.css";
import Company from "./components/company/Company.js";
import { companies } from "./components/dataset.js";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("Select a Company"); // Default value

  const handleCompanySelection = (companyName) => {
    setSelectedCompany(companyName);
  };

  return (
    <div className="container">
      <h1 className="main-title">{selectedCompany}</h1>
      {companies.map((company) => (
        <Company
          key={company.id}
          companyName={company.companyName}
          details={company.details}
          departments={company.departments}
          onCompanySelect={handleCompanySelection} // ✅ Corrected
        />
      ))}
    </div>
  );
}

export default App;

/* 

Writting class component in react

import React, { Component } from 'react';
import Department from './components/department/Department';

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
