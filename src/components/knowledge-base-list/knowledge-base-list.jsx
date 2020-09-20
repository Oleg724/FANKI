import React from 'react';
import KnowledgeBaseItem from '../knowledge-base-item';
import EmptyMessage from '../empty-message';
import { withGettingIndiciesFuncs } from '../hoc-helpers';
import noArticlesImage from '../../assets/no-articles.png';
import './knowledge-base-list.css';

const KnowledgeBaseList = ({ 
    list, 
    currentPage, 
    numberOfItemsOnPage, 
    getStartIndex,
    getEndIndex}) => {

    const _noItemsText = 'Нет новых запросов';

    const getListToShow = (obj) => {
        const startIdx = getStartIndex(currentPage, numberOfItemsOnPage);
        const endIdx = getEndIndex(currentPage, numberOfItemsOnPage);

        return getArrayFromObject(obj).slice(startIdx, endIdx);
    }

    const getItemsToRender = (list) => {
        return list.map(([ name, text ]) => {
            return <KnowledgeBaseItem name={ name } text={ text } key={ text }/>;
        });
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
            : getItemsToRender( getListToShow(list) );
    }

    const itemsToRender = getItemsToShow( list, dataLength, _noItemsText, noArticlesImage );

    return (
        <div className="knowledge-base-list">
            <ul className="knowledge-base-list__list">
                { itemsToRender } 
            </ul>    
        </div>
    )
}

export default withGettingIndiciesFuncs(KnowledgeBaseList);