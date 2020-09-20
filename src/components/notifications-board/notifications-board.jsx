import React from 'react';
import MessageBoard from '../message-board';
import NotificationsList from '../notifications-list';
import { withDataService, withUpdatedData } from '../hoc-helpers';
import './notifications-board.css';

const NotificationsBoard = ({ title, list, numberOfItems }) => {

    const messageBoardProps = {
        list: list, 
        title: title,
        numberOfItems: numberOfItems
    }

    return (
        <MessageBoard { ...messageBoardProps }>
            <NotificationsList list={ list } />
        </MessageBoard>
    )  
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUserNotifications,
    }
};

export default withDataService(mapMethodsToProps)( 
    withUpdatedData( NotificationsBoard ));