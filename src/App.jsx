import React, {useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom'
import {db} from './firebase/index'

import './assets/styles/style.css';
import {AnswersList, Chats, Movie} from './components/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFire);


const App = () => {
    const [answers, setAnswers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentId, setCurrentId] = useState(init);
    const [dataset, setDataset] = useState({});
    const [open, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");

    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question'
    })

    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId, videoId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500);
        break;
        
      case (/^https:*/.test(nextQuestionId)) :
        setState({
          videoId: videoId
        })
        handleClickOpen();
        break;

      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })
        
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500);
        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const initDataset = (dataset) => {
    setState({dataset: dataset})
  }

  useEffect(() => {
    (async() => {
      const initDataset = {};

      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id =doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      })

      setDataset(initDataset)
      displayNextQuestion(currentId, initDataset[currentId])
    })()
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area")
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className="c-section">
      <div className="wrapper">
        <div className="introduction">
          <div className="title">
            <FontAwesomeIcon icon="fire" />
              今すぐ活力が湧き出るbot
            <FontAwesomeIcon icon="fire" />
          </div>
          <div className="text">
            あなたの気分に合わせて、
            <br className="br-s"></br>
            おすすめの動画をご紹介します。
          </div>
        </div>
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <Movie open={open} handleClose={handleClose} videoId={videoId} />
        </div>
      </div>
    </section>
  );
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)

export default App