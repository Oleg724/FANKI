import React from 'react';
import './user-item.css';

const UserItem = ({ name, position, icon }) => {

    return (
        <div className="user-item">
            <div className="user-item__item">
                <p className="user-name__text">{ name }</p>
                <p className="user-name__text">{ position }</p>
            </div>
            <div className="user-item__item">
                <img src={ icon } alt="animal" className="user-item__icon"/>
            </div>
        </div>
    )
}

export default UserItem;