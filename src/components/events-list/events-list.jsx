import React, { Component } from 'react';
import EventsItem from '../events-item';
import EventsItemLg from '../events-item-lg';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import { withDate } from '../hoc-helpers/';
import './events-list.css';

class EventsList extends Component {
    
    _noItemsText = 'Нет новых обьявлений';

    state = {
        isActive: false,
        clickedBtnId: '',
        btnId: '', 
    }

    // в работе
    // onHandleClick(e) {
    //     const target = e.target;
    // }

    getFormattedText = (num) => {
        if (num === 1) return 'комментарий';
        if (num < 5) return 'комментария';
        if (num >= 5) return 'комментариев';
        return '';
    }

    getDayNameWithTime = (hoursAndMinutesOnly) => {
        return `Сегодня, ${ hoursAndMinutesOnly }`;
    }

    getFormattedDate = (date) => {
        const { 
            getFormattedDateFullMonthAndTime, 
            getHoursAndMinutesOnly, 
            checkDateOnToday } = this.props;

        const formattedDate = getFormattedDateFullMonthAndTime( new Date(date) );

        const hoursAndMinutesOnly = getHoursAndMinutesOnly(date);

        const isToday = checkDateOnToday(date); 
    
        const dayNameWithTime = isToday ? this.getDayNameWithTime(hoursAndMinutesOnly) : date;
    }

    getItemToRender = (item) => {
        const clazz = this.getClazz(item); 
        
        const formattedDate = this.getFormattedDate(item.creation);
        const formattedText = this.getFormattedText(item.comments);

        return item.type !== 'news'
            ?  <EventsItem { ...item } clazz={ clazz } />
            :  <EventsItemLg { ...item } 
                    date={ formattedDate } 
                    onHandleClick={ this.onHandleClick } 
                    isActive={ this.state.isActive } 
                    clickedBtnId={ this.state.clickedBtnId }
                    btnId={ this.state.btnId }
                    clazz={ clazz }
                    formattedText={ formattedText }
                 />
    }

    sortListByDate = (arr) => {
        return [...arr].sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
    }

    getClazz = (item) => {
        if (item.type === 'company') {
            return ' or';
        } else if (item.type === 'employee') {
            return ' gr';
        }
    }

    renderItems = (list) => {
        const sortedList = this.sortListByDate(list);

        return sortedList.map((item) => {
            return this.getItemToRender(item);
        });
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
        const { 
            list, 
            getFormattedDateFullMonth, 
            getFormattedDateFullMonthAndTime } = this.props;

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

export default withDate(EventsList);