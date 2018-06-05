import React, { Component } from 'react';
import '../App.css';

const defaultProps = {
  name: 'Nome padrão'
}

export default class Formhandler extends Component {

  changeInputHandler(e){
    let conteudo = e.target.value
    console.log(conteudo)
  }
  
  submitHandler(e){
    alert('Enviou!')
  }

  render() {
    const {title, name} = this.props
    
    return (
      <fragment>
        <h2> {title} </h2>
        <p> {name} </p>      
      

        <form onSubmit={this.submitHandler}>
          <label htmlFor="inputTest">Escreva para testar!</label>
          <input 
            type="text" 
            name="inputTest" 
            id="inputTest" 
            onChange={this.changeInputHandler}
          />
        </form>
      </fragment>
    );
  }
}

Formhandler.defaultProps = defaultProps