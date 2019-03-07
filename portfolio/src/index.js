// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o componenet APP
import App from './App';
// Importando o css
import './index.css';

// Renderizando o component APP
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);