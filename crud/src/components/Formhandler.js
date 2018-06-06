import React, { Component } from 'react';
import '../App.css';

const defaultProps = {
  subtitle: 'Título padrão',
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

  componentWillMount(){
    //console.warn('Will')
    
  }
  
  componentDidMount(){
    //console.error('Did')
  }

  componentWillUpdate(nextProps, nextState){
    //console.warn('WillUpdate')
    //console.log(this.props, this.state, nextProps, nextState)
  }
  
  componentDidUpdate(prevProps, prevState){
    //console.error('DidUpdate')
    //console.log(this.props, this.state, prevProps, prevState)
  }

  render() {
    const {subtitle, name} = this.props
    
    return (
      <React.Fragment>
        <h2> {subtitle} </h2>
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
      </React.Fragment>
    );
  }
}

Formhandler.defaultProps = defaultProps