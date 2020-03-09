import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import SideMenu from './Menu/SideMenu';
import Title from './Title';

const useStyles = makeStyles({
  appBar: {
    gridArea: `header`,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <SideMenu titleElement={<Title />} />
        <Title />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
