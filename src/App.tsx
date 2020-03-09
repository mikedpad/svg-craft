import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import SVGCanvas from './components/SVGCanvas';
import Header from './components/UI/Header';
import theme from './styles/theme';

const respTheme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  container: {
    display: `grid`,
    grid: `[row1-start] 'header header header' minmax(12vmin, 70px) [row1-end]
    [row2-start] '. main .' auto [row2-end]
    [row3-start] '. . .' minmax(3vmin, 1fr) [row3-end]
    / 1fr 85vmin 1fr`,
    height: `100vh`,
    overflow: `hidden`,
    width: `100vw`,
  },
  main: {
    gridArea: `main`,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={respTheme}>
      <CssBaseline />
      <div className={classes.container}>
        <Header />
        <main className={classes.main}>
          <SVGCanvas dimensions={[200, 200]} />
        </main>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
