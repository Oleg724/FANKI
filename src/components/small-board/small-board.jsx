import React, { Component } from 'react';
import QueriesList from '../queries-list';
import MessageBoard from '../message-board';
import { withDataService, withArrowFunction, withUpdatedData } from '../hoc-helpers';
import './small-board.css';

const SmallBoard = ({ 
        list, 
        numberOfItems, 
        numberOfPages, 
        currentPage, 
        onNextPage, 
        onPrevPage, 
        title}) => {

    const _itemsOnPage = 1;
    
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
        itemsOnPage: _itemsOnPage,
        numberOfItems: numberOfItems
    }

    return (
        <MessageBoard { ...messageBoardProps } >
            <QueriesList { ...listProps } />
        </MessageBoard>
    )
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService[getUsersData],
    }
};

export default withDataService(mapMethodsToProps)( 
    withArrowFunction( 
        withUpdatedData(1)(SmallBoard) ) );