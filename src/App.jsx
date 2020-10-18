import React from 'react';
import ReactDOM from 'react-dom'

import defaultDataset from './dataset';
import './assets/styles/style.css';
import {AnswersList, Chats, Movie} from './components/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFire);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
      videoId: ""
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      type: 'question',
      chats: chats,
      currentId: "nextQuestionId"
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId, videoId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
        
      case (/^https:*/.test(nextQuestionId)) :
        this.setState({
          videoId: videoId
        })
        this.handleClickOpen();
        break;

      default:
        const chats = this.state.chats;

        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })
        
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById("scroll-area")
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
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
              あなたの気分に合わせて、おすすめの動画をご紹介します。
            </div>
          </div>
          <div className="c-box">
            <Chats chats={this.state.chats} />
            <AnswersList answers={this.state.answers} select={this.selectAnswer} />
            <Movie open={this.state.open} handleClose={this.handleClose} videoId={this.state.videoId} />
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)