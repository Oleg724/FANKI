import React from 'react';
import ArrowLarge from '../arrow-large';
import HeadlineTitle from '../headline-title';
import LinkItem from '../link-item';
import PaginationPoints from '../pagination-points';

import './message-board.css';

const MessageBoard = ({
    onNextPage, 
    onPrevPage, 
    title, 
    children, 
    list, 
    currentPage,
    numberOfItems,
    numberOfPages}) => {

    return (
        <div className="message-board">
            <div className="message-board__arrow message-board__arrow--left">
                <ArrowLarge onChangePage={ onPrevPage } />
            </div>
            <div className="message-board__item">
                <HeadlineTitle 
                    title={ title } 
                    count={ numberOfItems } />
            </div>
            <div className="message-board__item message-board__item--lg">
                
                <div className="message-board__list">
                    { children }
                </div>

                <div className="pagination-wrapper">
                    <PaginationPoints 
                        number={ numberOfPages } 
                        currentPage={ currentPage } />
                </div>
                
            </div>
            <div className="message-board__arrow message-board__arrow--right">
                <ArrowLarge onChangePage={ onNextPage } 
                    clazz={' right'} />
            </div>
            <div className="message-board__item">
                <LinkItem title={ title } />
            </div>
        </div>
    )
}

export default MessageBoard;