import React, { Component } from 'react';
import CalendarList from '../calendar-list';
import MessageBoard from '../message-board';
import { withDataService, withArrowFunction, withUpdatedData } from '../hoc-helpers';
import './calendar-board.css';

class CalendarBoard extends Component {

    componentDidMount() {
        const { setNumberOfPages, numberOfPages } = this.props;

        setNumberOfPages(numberOfPages);
    }
    
    componentDidUpdate(prevProps) {
        const { setNumberOfPages, numberOfPages } = this.props;

        if (prevProps.numberOfPages !== numberOfPages) {
            setNumberOfPages(numberOfPages);
        }  
    } 
    
    render() {
        const {       
            title,
            list, 
            numberOfItems, 
            numberOfItemsOnPage,
            numberOfPages, 
            currentPage, 
            onNextPage, 
            onPrevPage } = this.props;

        const messageBoardProps = {
            list: list, 
            currentPage: currentPage,
            onNextPage: onNextPage,
            onPrevPage: onPrevPage,
            title: title,
            numberOfPages: numberOfPages,
            numberOfItems: numberOfItems,
            path: '/calendar'
        }
    
        const listProps = {
            list: list,
            currentPage: currentPage,
            numberOfItemsOnPage: numberOfItemsOnPage,
            numberOfItems: numberOfItems,
        }

        return (
            <MessageBoard { ...messageBoardProps }>
                <CalendarList { ...listProps }/>
            </MessageBoard>
        )  
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUserCalendar,
    }
};

export default withDataService(mapMethodsToProps)(  
    withArrowFunction( 
        withUpdatedData( CalendarBoard )));