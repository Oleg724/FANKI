import React, { Component } from 'react';
import EventsItem from '../events-item';
import EventsItemLg from '../events-item-lg';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withFormattedDateFuncs } from '../hoc-helpers';
import './events-list.css';

class EventsList extends Component {
    
    _noItemsText = 'Нет новых обьявлений';

    state = {
        clickedBtnId: '',
        btnId: '', 
    }

    isInLocalStorage = (item) => {
        return localStorage.getItem(item.id) ? true : false;
    }

    getFormattedText = (num) => {
        if (num === 1) return 'комментарий';
        if (num < 5) return 'комментария';
        if (num >= 5) return 'комментариев';
        return '';
    }

    getFormattedDateForBlockDate = (date) => {
        const { 
            checkDateOnToday, 
            checkDateOnYesterday, 
            getTodayWord,
            getYesterdayWord,
            getDayAndShortMonth } = this.props;

        const isToday = checkDateOnToday(date);
        const isYesterday = checkDateOnYesterday(date);

        if (isToday) {
            return getTodayWord();
        } else if (isYesterday) {
            return getYesterdayWord();
        }
        
        return getDayAndShortMonth(date);
    }

    getFormattedDate = (date) => {
        const { 
            getFormattedDateFullMonthAndTime, 
            getHoursAndMinutesOnly, 
            checkDateOnToday,
            getTodayWordWithTime } = this.props;

        const isToday = checkDateOnToday(date); 

        return isToday
            ? getTodayWordWithTime( getHoursAndMinutesOnly(date) ) 
            : getFormattedDateFullMonthAndTime( new Date(date) );
    }

    getItemToRender = (item, activeClazz = '', newClazz = '') => {
        const textForDateBlock = this.getFormattedDateForBlockDate( new Date(item.creationTime) );

        const formattedDate = this.getFormattedDate(item.creationTime);
        const formattedText = this.getFormattedText(item.comments);
        
        const eventsItemProps = {
            id: item.id,
            date: formattedDate,
            activeClazz: activeClazz,
            newClazz: newClazz,
            blockDate: textForDateBlock,
            setItemToLocalStorage: this.setItemToLocalStorage,
            isNotActive: activeClazz ? false : true
        };

        const eventsItemLgProps = {
            id: item.id,
            onHandleClick: this.onHandleClick, 
            isActive: this.state.isActive,
            clickedBtnId: this.state.clickedBtnId,
            btnId: this.state.btnId,
            formattedText: formattedText,
            date: formattedDate,
            newClazz: newClazz,
            activeClazz: activeClazz,
            blockDate: textForDateBlock,
            setItemToLocalStorage: this.setItemToLocalStorage,
            isNotActive: activeClazz ? false : true
        }

        return item.type !== 'news'
            ?  <EventsItem { ...item } { ...eventsItemProps } key={ item.id }/>
            :  <EventsItemLg { ...item } { ...eventsItemLgProps } key={ item.id } />
    }

    sortEventsListByDate = (arr) => {
        return [...arr].sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
    }

    renderItems = (list) => {
        const { getFullDateFromStr } = this.props;

        const sortedList = this.sortEventsListByDate(list);

        const arraysGroupedByDates = sortedList.map((item, idx, arr) => {
            if (idx !== 0) {
                const prevDate = getFullDateFromStr(arr[idx - 1].creationTime);
                const date = getFullDateFromStr(item.creationTime);

                if (prevDate === date) {
                    if ( !this.isInLocalStorage(item) ) {
                        return this.getItemToRender(item, '', ' new');
                    }
                    return this.getItemToRender(item);
                }
            }

            if ( !this.isInLocalStorage(item) ) {
                return this.getItemToRender(item, ' active', ' new');
            }
            return this.getItemToRender(item, ' active');
        });

        return arraysGroupedByDates;
    }

    getArrayFromObject = (obj) => {
        return Object.entries(obj);
    }

    getArrayLength = (arr) => {
        return arr.length;
    }

    isArray = (obj) => {
        return Array.isArray(obj);
    }

    getItemsToShow = (list, dataLength, text, image) => {
        return dataLength === 0
            ? <EmptyMessage text={ text } image={ image } />
            : this.renderItems(list);
    }    

    render() {
        const { list } = this.props;

        const dataLength = this.isArray(list) 
            ? this.getArrayLength(list)
            : this.getArrayLength( this.getArrayFromObject(list) );

        const itemsToRender = this.getItemsToShow(list, dataLength, this._noItemsText, noArticlesImage);

        return (
            <ul className="events-list">
                { itemsToRender }
            </ul>
        )
    }
}

export default withFormattedDateFuncs(EventsList);