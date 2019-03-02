import React, { Component } from 'react';
import api from '../services/api';

import like from '../like.svg'
import './Tweet.css';

export default class Tweet extends Component {

    hendleLike = async () => {
        const { _id } = this.props.tweet;
    
        await api.post(`likes/${_id}`);
    }

  render() {
    const { tweet } = this.props;

    return (
        <li className="tweet">
            <strong>{ tweet.author }</strong>
            <p>{ tweet.content }</p>
            <button type="button" onClick={this.hendleLike}>
                <img src={like} alt="Likes" />
                {tweet.likes}
            </button>
        </li>    
    );
  }
}
