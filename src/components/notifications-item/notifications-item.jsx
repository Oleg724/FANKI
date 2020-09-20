import React from 'react';
import './notifications-item.css';

const NotificationsItem = ({ 
    id, 
    from, 
    icon, 
    creationTime, 
    type, 
    kind, 
    text }) => {

    const typeName = type
        ? <p className="notifications-item__type">{ type }</p>
        : '';

    return (
        <li className="notifications__item notifications-item" key={ id }>
            <img src={ icon } alt="" className="notifications-item__icon"/>
            <div className="notifications-item__item">                
                <div className="notifications-item__inner">
                    <div className="notifications-item__header">
                        <p className="notifications-item__name">{ from }</p>
                        <p className="notifications-item__kind">{ kind }</p>
                    </div>                   
                    <p className="notifications-item__time">{ creationTime }</p>
                </div>
                <p className="notifications-item__text">{ text }</p>
                { typeName }
            </div>                       
        </li>
    )
}

export default NotificationsItem;