import React from 'react';
import MessageBoard from '../message-board';
import EventsList from '../events-list';
import { withDataService, withUpdatedData } from '../hoc-helpers';
import './events-board.css';

const EventsBoard = ({ title, list, numberOfItems }) => {

    const messageBoardProps = { list, title, numberOfItems };

    return (
        <MessageBoard { ...messageBoardProps }>
            <EventsList list={ list } />
        </MessageBoard>
    )  
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUserEvents,
    }
};

export default withDataService(mapMethodsToProps)( 
    withUpdatedData( EventsBoard ));