import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import User from '../assets/img/user.jpg';
import Host from '../assets/img/bear.jpg';

const useStyles = makeStyles(() => (
  createStyles({
    "avatar": {
      width: "50px",
      height: "50px",
      marginRight: "15px"
    }
  })
));


const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const row = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
  const classes = useStyles();

  return(
    <ListItem className={row}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Host} className={classes.avatar}/>
        ) : (
          <Avatar alt="icon" src={User} className={classes.avatar}/>
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat