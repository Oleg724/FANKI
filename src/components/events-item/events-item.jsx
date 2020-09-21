import React from 'react';
import './events-item.css';

const EventsItem = ({ 
    id, 
    from, 
    icon, 
    creationTime, 
    text,
    clazz = '' }) => {

    return (
        <li className={ `events__item events-item${ clazz }` } key={ id }>
            <img src={ icon } alt="" className="events-item__icon"/>              
            <div className="events-item__inner">
                <div className="events-item__header">
                    <p className="events-item__name">{ from }</p>
                    <p className="events-item__time">{ creationTime }</p>                  
                </div>                   
                <p className="events-item__text">{ text }</p>
            </div>                    
        </li>
    )
}

export default EventsItem;