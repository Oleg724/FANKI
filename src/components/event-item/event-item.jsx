import React from 'react';
import './event-item.css';

const EventItem = ({ item }) => {

    const getType = () => {
        return item.type;
    }

    const getDay = () => {
        const dateArr = item.date.split(' ')
        return dateArr[0].toString();
    }

    const getMonth = () => {
        const dateArr = item.date.split(' ')
        return dateArr[1].toString();
    }

    const getTime = () => {
        return item.time;
    }

    const getTitle = () => {
        return item.title;
    }
    
    return (
        <div className="events-item">
            <div className="events-item__date">
                <p className="events-item__month">
                    { getMonth() }
                </p>
                <p className="events-item__day">
                    { getDay() }
                </p>
            </div>
            <p className="events-item__text">
                <span>{ getTime() }</span> | <span>{ getType() }</span>
            </p>
            <p className="events-item__title">
                { getTitle() }
            </p>
        </div>
    )
}

export default EventItem;