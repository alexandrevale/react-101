import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const lista = [
        'Item 1',
        'Item 2',
        'Item 3'
      ]
    
    return (
      <div className="App">
        <h1>
          {
            lista.map(item => {
              return(<div> { item } </div>)
            })
            
          }
        </h1>
      </div>
    );
  }
}

export default App;
