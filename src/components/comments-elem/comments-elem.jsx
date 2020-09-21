import React from 'react';
import commentsIcon from '../../assets/message-circle.png';
import './comments-elem.css';

const CommentsElem = ({ num = 0, text }) => {

    return (
        <div className="comments-elem">
            <img src={ commentsIcon } alt="message-circle" className="comments-elem__img"/>
            <p className="comments-elem__count">
                <span>{ num }</span> { text }</p>
        </div>
    )
}

export default CommentsElem;