import React, { Component } from 'react';
import '../App.css';

export default class Formhandler extends Component {

  changeInputHandler(e){
    let conteudo = e.target.value
    console.log(conteudo)
  }
  
  submitHandler(e){
    alert('Enviou!')
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="inputTest">Escreva para testar!</label>
        <input 
          type="text" 
          name="inputTest" 
          id="inputTest" 
          onChange={this.changeInputHandler}
        />
      </form>
    );
  }
}