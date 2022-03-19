import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

ReactDOM.render(
  <Router>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </Router>
  ,
  document.getElementById('root')
);
