import React, { cloneElement } from 'react';
import MessageBoard from '../message-board';
import { withArrowFunction, } from '../hoc-helpers';
import './board-wrapper.css';

const BoardWrapper = ({ 
        list, 
        numberOfItems, 
        numberOfPages, 
        currentPage, 
        onNextPage, 
        onPrevPage, 
        title,
        children,
        itemsOnPage}) => {
    
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
        itemsOnPage: itemsOnPage,
        numberOfItems: numberOfItems
    }

    console.log(`board-message: ${list}`)

    return (
        <MessageBoard { ...messageBoardProps } >
            {/* { cloneElement(children, {...listProps}) } */}
            {children}
        </MessageBoard>
    )
}

export default withArrowFunction(BoardWrapper);