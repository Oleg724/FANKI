import React from 'react';
import EventsItem from '../events-item';
import EventsItemLg from '../events-item-lg';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withDate } from '../hoc-helpers/';
import './events-list.css';

const EventsList = ({ 
    list, 
    getFormattedDateFullMonth, 
    getFormattedDateFullMonthAndTime }) => {
    
    const _noItemsText = 'Нет новых обьявлений';

    const getItemToRender = (item) => {
        const clazz = getClazz(item);
        const formattedDate = getFormattedDateFullMonthAndTime( new Date(item.creationTime) );

        return item.type !== 'news'
            ?  <EventsItem { ...item } clazz={ clazz } />
            :  <EventsItemLg { ...item } date={ formattedDate } />
    }

    const sortListByDate = (arr) => {
        return [...arr].sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
    }

    const getClazz = (item) => {
        if (item.type === 'company') {
            return ' or';
        } else if (item.type === 'employee') {
            return ' gr';
        }
    }

    const renderItems = (list) => {
        const sortedList = sortListByDate(list);

        return sortedList.map((item) => {
            return getItemToRender(item);
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

export default withDate(EventsList);