import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import App from './App';
import theme from './styles/theme';

const respTheme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={respTheme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById(`root`),
);
