import React from 'react';
import { Link } from 'react-router-dom';
import './link-item.css';

const LinkItem = ({ title, path }) => {

    return (
        <div className="link-item">
            <Link to={ path }>
                <p className="link-item__title">{ title }</p>
                <p className="link-item__arrow">&rarr;</p>
            </Link>
        </div>
    )
}

export default LinkItem;