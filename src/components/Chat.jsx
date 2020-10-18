import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import User from '../assets/img/user.png';
import Host from '../assets/img/bear.jpg';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return(
    <ListItem>
      <ListItemAvatar className={classes}>
        {isQuestion ? (
          <Avatar alt="icon" src={Host} />
        ) : (
          <Avatar alt="icon" src={User} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat