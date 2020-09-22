import React from 'react';
import NotificationsItem from '../notifications-item';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withGettingIndiciesFuncs, withFormattedDateFuncs } from '../hoc-helpers';
import './notifications-list.css';

const NotificationsList = ({ 
    list, 
    getDayAndShortMonth, 
    getHoursAndMinutesOnly, 
    checkDateOnToday }) => {

    const _noItemsText = 'Нет новых уведомлений';

    const getTime = (time) => {
        return `${ time }`;
    }

    const getFormattedDate = (date) => {
        const isToday = checkDateOnToday(date); 
        const hoursAndMinutesOnly = getHoursAndMinutesOnly(date); 

        return isToday 
            ? getTime(hoursAndMinutesOnly) 
            : getDayAndShortMonth( new Date(date) );
    }

    const sortEventsListByDate = (arr) => {
        return [...arr].sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
    }

    const renderItems = (list) => {
        const sortedList = sortEventsListByDate(list);
        
        return sortedList.map((item) => {
            const date = new Date(item.creationTime);
            const formattedDate = getFormattedDate(date);

            return <NotificationsItem { ...item } key={ item.id } date={ formattedDate }/>
        });
    }

    const getArrayFromObject = (obj) => {
        return Object.entries(obj);
    }

    const getArrayLength = (arr) => {
        return arr.length;
    }

    const isArray = (obj) => {
        return Array.isArray(obj);
    }

    const dataLength = isArray(list) 
        ? getArrayLength(list)
        : getArrayLength( getArrayFromObject(list) );

    const getItemsToShow = (list, dataLength, text, image) => {
        return dataLength === 0
            ? <EmptyMessage text={ text } image={ image } />
            : renderItems(list);
    }    

    const itemsToRender = getItemsToShow(list, dataLength, _noItemsText, noArticlesImage);

    return (
        <ul className="events-list">
            { itemsToRender }
        </ul>
    )
}

export default withGettingIndiciesFuncs( 
    withFormattedDateFuncs(NotificationsList));