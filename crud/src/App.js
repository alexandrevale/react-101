import React, { Component } from 'react';
import './App.css';

class App extends Component {

  clickHandler(e){
    console.warn(e.target.innerHTML)
  }
  
  changeInputHandler(e){
    let conteudo = e.target.value
    console.log(conteudo)
  }
  
  submitHandler(e){
    alert('Enviou!')
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
          <form onSubmit={this.submitHandler}>
            <label htmlFor="inputTest">Escreva para testar!</label>
            <input type="text" name="inputTest" id="inputTest" onChange={this.changeInputHandler}/>
          </form>
      </div>
    );
  }
}

export default App;
