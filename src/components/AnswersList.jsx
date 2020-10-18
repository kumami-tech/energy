import React from 'react';
import {Answer} from './index';

const AnswersList = (props) => {
  return(
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} videoId={value.videoId} key={index.toString()} select={props.select}/>
      })}
    </div>
  )
}

export default AnswersList