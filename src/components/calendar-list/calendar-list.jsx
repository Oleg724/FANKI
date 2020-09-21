import React from 'react';
import EventItem from '../calendar-item';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withGettingIndiciesFuncs } from '../hoc-helpers';
import './calendar-list.css';

const CalendarList = ({ 
    list, 
    currentPage, 
    numberOfItemsOnPage, 
    getStartIndex,
    getEndIndex}) => {

    const _noItemsText = 'Нет новых событий';

    const getListToShow = (arr) => {
        const startIdx = getStartIndex(currentPage, numberOfItemsOnPage);
        const endIdx = getEndIndex(currentPage, numberOfItemsOnPage);

        return [...arr].slice(startIdx, endIdx);
    }

    const renderItems = (list) => {
        return list.map((item) => {
            return <EventItem item={ item } key={ item.title }/>
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
            : renderItems( getListToShow(list) );
    }    

    const itemsToRender = getItemsToShow(list, dataLength, _noItemsText, noArticlesImage);

    return (
        <ul className="calendar-list">
            { itemsToRender }
        </ul>
    )
}

export default withGettingIndiciesFuncs(CalendarList);