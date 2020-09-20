import React from 'react';
import './knowledge-base-item.css';

const KnowledgeBaseItem = ({ name, text }) => {

    return (
        <li className="knowledge-base-list__item">
            <p className="knowledge-base-list__text">
                Название публикации: <span>{ name }</span> 
            </p>
            
            <p className="knowledge-base-list__text">
                Содержание: <span>{ text }</span>
                
            </p>
        </li>
    )
}

export default KnowledgeBaseItem;