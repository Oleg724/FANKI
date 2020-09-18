import React from 'react';
import './link-item.css';

const LinkItem = ({ title = "Hello" }) => {

    return (
        <div className="link-item">
            <p className="link-item__title">{ title }</p>
            <p className="link-item__arrow">&rarr;</p>
        </div>
    )
}

export default LinkItem;