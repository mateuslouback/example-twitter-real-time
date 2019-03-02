import React, { Component } from 'react';
import api from '../services/api';
import socket from 'socket.io-client';

import Tweet from '../components/Tweet';

import twitterlogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {

  state = {
    tweets: [],
    newTwieet: '',
  }

  async componentDidMount() {
    this.subscribeToEvents();

    const response = await api.get('tweets');

    this.setState({tweets: response.data});
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');

    io.on('tweet', data => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });
    
    io.on('like', data => {
      this.setState({ tweets: this.state.tweets.map( tweet =>
        tweet._id == data._id ? data : tweet
      ) })
    });
  }

  hendleNewTwieet = async (e) => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTwieet;
    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('tweets', {content, author})

    this.setState({newTwieet: ''});
  }

  handleInputChange = (e) => {
    this.setState({ newTwieet: e.target.value });
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img src={twitterlogo} height="24" alt="Tweeter Logo" />
        <form>
          <textarea value={this.state.newTwieet} 
          onChange={this.handleInputChange} 
          onKeyDown={this.hendleNewTwieet} 
          placeholder="O que está acontecendo?" />
        </form>
        <ul className="tweet-list">
          {this.state.tweets.map(tweet => <Tweet key={tweet._id} tweet={tweet} /> )}
        </ul>          
      </div>
    );
  }
}