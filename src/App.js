import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = "HELLOOO Bro, REACT!";
    const helloBro = "HELLO";
    const iAm = {
      name: "Dimon",
      lastName: "Egorov"
    };
    const answer = "I'm sure you will learn me";
    return <div className="App">
        <h2>{helloWorld}</h2>
        <h2>
          {helloBro} {iAm.name} {iAm.lastName}
        </h2>
        <p>{answer}</p>
      </div>;
  }
}

export default App;