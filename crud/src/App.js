import React, { Component } from 'react';
import Formhandler from './components/Formhandler';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'React 101',  
      name: 'Nome inicial',
      subtitle: 'Título inicial'
    }
    
    this.mudarEstado = this.mudarEstado.bind(this);
  }

  clickHandler(e){
    console.warn(e.target.innerHTML)
  }
  
  mudarEstado(){
    this.setState({
      title: 'React 101 - setState',
      name: 'Nome atualizado',
      subtitle: 'Título atualizado'
    })
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
          <Formhandler 
            subtitle= {this.state.subtitle}
            name = {this.state.name}
            onClick = {this.mudarEstado}
          />
          <button onClick={this.mudarEstado}>Click para mudar o estado</button>
      </div>
    );
  }
}

export default App;
