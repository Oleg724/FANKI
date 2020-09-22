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
    withoutLink = true, 
    children, 
    currentPage = 0,
    numberOfItems,
    numberOfPages = 0 }) => {

    const arrowLeft = numberOfPages
        ? <ArrowLarge onChangePage={ onPrevPage } />
        : '';

    const arrowRigth = numberOfPages
        ? <ArrowLarge onChangePage={ onNextPage } clazz={' right'} />
        : '';

    const paginationPoints = numberOfPages
        ? <PaginationPoints number={ numberOfPages } currentPage={ currentPage } />
        : '';

    const linkItem = withoutLink 
        ? <LinkItem title={ title } />
        : '';

    return (
        <div className="message-board">
            <div className="message-board__arrow message-board__arrow--left">
                { arrowLeft }
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
                    { paginationPoints }
                </div>
                
            </div>
            <div className="message-board__arrow message-board__arrow--right">
                { arrowRigth }
            </div>
            <div className="message-board__item">
                { linkItem }
            </div>
        </div>
    )
}

export default MessageBoard;