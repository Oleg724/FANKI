import React from 'react';
import QueriesMessage from '../queries-message';
import QueriesItem from '../queries-item';
import EmptyMessage from '../empty-message';
import { withGettingIndiciesFuncs } from '../hoc-helpers';
import noArticlesImage from '../../assets/no-articles.png';
import './queries-list.css';

const QueriesList = ({ 
    list, 
    currentPage, 
    numberOfItemsOnPage, 
    numberOfItems,
    getStartIndex,
    getEndIndex}) => {

    const _baseText = 'несогласованн';
    const _noItemsText = 'Нет новых запросов';

    const getUniqueValuesArray = (arr) => {
        return [...new Set(arr)];
    }

    const getQueriesNames = (obj) => {
        const uniqueValuesArr = getUniqueValuesArray( Object.values(obj) );

        return uniqueValuesArr.map((name) => name);
    }

    const getListToShow = (obj) => {
        const prevPage = currentPage - 1;

        const startIdx = getStartIndex(prevPage, numberOfItemsOnPage);
        const endIdx = getEndIndex(prevPage, numberOfItemsOnPage);

        return getArrayFromObject(obj).slice(startIdx, endIdx);
    }

    const getTwoFirstItems = (arr) => {
        return getQueriesNames(arr).slice(0, 2);
    }

    const getArrWithoutTwoFirstItems = (arr) => {
        return getQueriesNames(arr).slice(2);
    }

    const getFormattedNames = (arr) => {
        const twoFirstItems = getTwoFirstItems(arr);
        const arrWithoutTwoFirstItems = getArrWithoutTwoFirstItems(arr);

        return twoFirstItems.join(' и ') + ', ' + arrWithoutTwoFirstItems.join(', ');
    }

    const getFormattedText = (num, text) => {
        return num === 1 
            ? `${num} ${text}ый запрос`
            : `${num} ${text}ых запроса`;
    }

    const getItemsToRender = (list) => {
        return list.map(([ text, name ]) => {
            return <QueriesItem name={ name } text={ text } key={ text }/>;
        });
    } 

    const getItemsOrMessageToShow = (list) => {
        const text = getFormattedText(numberOfItems, _baseText);
        const names = getFormattedNames(list);

        return currentPage === 1
            ? <QueriesMessage text={ text } names={ names }/>
            : getItemsToRender( getListToShow(list) );
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
            : getItemsOrMessageToShow(list);
    }

    const itemsToRender = getItemsToShow(list, dataLength, _noItemsText, noArticlesImage)

    return (
        <div className="queries">
            <ul className="queries__list">
                { itemsToRender }
            </ul>    
        </div>
    )
}

export default withGettingIndiciesFuncs(QueriesList);