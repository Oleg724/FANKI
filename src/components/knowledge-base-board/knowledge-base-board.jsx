import React, { Component, cloneElement } from 'react';
import MessageBoard from '../message-board';
import KnowledgeBaseList from '../knowledge-base-list';
import { withDataService, withUpdatedData, withArrowFunction } from '../hoc-helpers';
import './knowledge-base-board.css';

class KnowledgeBaseBoard extends Component {

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
            onPrevPage,
            children } = this.props;

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
                <KnowledgeBaseList {...listProps} />
            </MessageBoard>
        )  
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUserKnowledgeBase,
    }
};

export default withDataService(mapMethodsToProps)(  
    withArrowFunction( 
        withUpdatedData( KnowledgeBaseBoard)));