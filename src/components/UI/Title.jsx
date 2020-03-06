import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.headline,
    fontSize: `2rem`,
    margin: theme.spacing(0.5, 0),
    textTransform: `uppercase`,
    textAlign: `center`,
  },
}));

const Title = () => {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.title}>
      SVG Craft
    </Typography>
  );
};

export default Title;
