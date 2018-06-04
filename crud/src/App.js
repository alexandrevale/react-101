import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'React 101'  
    }
  }


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
          <h1>{ this.state.title }</h1>
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
            <input 
              type="text" 
              name="inputTest" 
              id="inputTest" 
              onChange={this.changeInputHandler}
            />
          </form>
      </div>
    );
  }
}

export default App;
