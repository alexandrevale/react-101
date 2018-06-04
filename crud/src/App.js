import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clickHandler(e){
    console.warn(e.target.innerHTML)
  }
  
  render() {
    const lista = [
        'Item 1',
        'Item 2',
        'Item 3'
      ]
    
    return (
      <div className="App">
          <ul>
          {
            lista.map(item => {
              return(
              <li key={ item } onClick={this.clickHandler}> 
                  { item } 
              </li> )
            })
            
          }
          </ul>
      </div>
    );
  }
}

export default App;
