import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from "./index";

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      // height: "400px",
      padding: 0,
      overflow: 'auto'
    }
  })
));

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats}>
      {props.chats.map((chats, index) => {
        return <Chat text={chats.text} type={chats.type} key={index.toString()} />
      })}
    </List>
  )
}

export default Chats