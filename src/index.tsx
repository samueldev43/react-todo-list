import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

//import global style from styled components

import GlobalStyle from './styles'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
