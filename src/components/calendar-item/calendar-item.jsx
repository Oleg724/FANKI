import React from 'react';
import './calendar-item.css';

const CalendarItem = ({ item }) => {

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
        <li className="calendar-item">
            <div className="calendar-item__date">
                <p className="calendar-item__month">
                    { getMonth() }
                </p>
                <p className="calendar-item__day">
                    { getDay() }
                </p>
            </div>
            <p className="calendar-item__text">
                <span>{ getTime() }</span> | <span>{ getType() }</span>
            </p>
            <p className="calendar-item__title">
                { getTitle() }
            </p>
        </li>
    )
}

export default CalendarItem;