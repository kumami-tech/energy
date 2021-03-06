import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const red = '#EF473B'

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      borderColor: red,
      color: red,
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '8px',
      borderRadius: '10px',
      "&:hover": {
        backgroundColor: red,
        color: '#fff'
      }
    }
  })
));

const Answer = (props) => {
  const classes = useStyles();

  return(
    <Button
      className={classes.button}
      variant="outlined" onClick={() => props.select(props.content, props.nextId, props.videoId)}
    >
      {props.content}
    </Button>
  )
}

export default Answer