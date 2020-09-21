import React from 'react';
import NotificationsItem from '../notifications-item';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withGettingIndiciesFuncs } from '../hoc-helpers';
import './notifications-list.css';

const NotificationsList = ({ list }) => {

    const _noItemsText = 'Нет новых уведомлений';

    const renderItems = (list) => {
        return list.map((item) => {
            return <NotificationsItem { ...item } key={ item.id } />
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

export default withGettingIndiciesFuncs(NotificationsList);