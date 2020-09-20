import React, { Component } from 'react';
import EventsList from '../events-list';
import MessageBoard from '../message-board';
import { withDataService, withArrowFunction, withUpdatedData } from '../hoc-helpers';
import './events-board.css';

class EventsBoard extends Component {

    componentDidMount() {
        const { setNumberOfPages, numberOfPages } = this.props;

        setNumberOfPages(numberOfPages);
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { setNumberOfPages, numberOfPages } = this.props;

        if (prevProps.numberOfPages !== numberOfPages) {
            setNumberOfPages(numberOfPages);
        }  
    } 
    
    render() {
        const {       
            title,
            list, 
            itemsOnPage,
            numberOfItems, 
            numberOfItemsOnPage,
            numberOfPages, 
            currentPage, 
            onNextPage, 
            onPrevPage} = this.props;

        const messageBoardProps = {
            list: list, 
            currentPage: currentPage,
            onNextPage: onNextPage,
            onPrevPage: onPrevPage,
            title: title,
            numberOfPages: numberOfPages,
            numberOfItems: numberOfItems
        }
    
        const listProps = {
            list: list,
            currentPage: currentPage,
            numberOfItemsOnPage: numberOfItemsOnPage,
            numberOfItems: numberOfItems,
        }

        return (
            <MessageBoard { ...messageBoardProps }>
                <EventsList { ...listProps }/>
            </MessageBoard>
        )  
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUserEvents,
    }
};

export default withDataService(mapMethodsToProps)(  
    withArrowFunction( 
        withUpdatedData( EventsBoard )));