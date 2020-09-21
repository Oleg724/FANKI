import React, { Component } from 'react';
import UserItem from '../user-item';
import Dates from '../dates';
import ArrowLarge from '../arrow-large';
import { withDataService, withFormattedDateFuncs, withArrowFunction } from '../hoc-helpers';

import './absents-list.css';

class AbsentsList extends Component {

    _itemsOnPage = 9;

    state = {
        all: '', 
        vacation: '',
        dayOff: '',
        sickLeave: '',
        numberOfPages: 0,
        absentList: []
    }

    getListToShow = (arr) => {
        const { currentPage } = this.props;

        const startIdx = (currentPage - 1) * (this._itemsOnPage);
        const endIdx = currentPage * (this._itemsOnPage);

        return [...arr].slice(startIdx, endIdx);
    }

    getNumberOfPages = (arr) => {
        return Math.ceil(arr.length / 9);
    }
    
    setNumberOfPages = (num) => {
        this.setState({ numberOfPages: num });
    }

    checkRestOfDays = (endTime) => {
        let now = '';
        const end = new Date(endTime);

        if (this.props.datesFilter === "tomorrow") {
            now = this.props.getNextDay();
        } else if (this.props.datesFilter === "week") {
            now = this.props.getNextWeek();
        } else {
            now = new Date();
        }

        return (end - now) / (1000 * 60 * 60 * 24);
    }

    getEndTime = (end) => {
        const endAfter = new Date(end.after);

        if ( this.checkRestOfDays(end.after) > 2 ) {
            return `${ this.props.getFormattedDateFullMonth(endAfter) }`
        } else {
            return `${ this.props.getFormattedDateFullMonth(endAfter) }, 
                ${ this.props.getHours(end.after) } - ${ this.props.getHours(end.before) }`;
        }
    }

    getPeriod = (item) => {
        const { start: startTime, end } = item.absence.period;

        if ( this.checkRestOfDays(end.after) > 2 ) {
            return {
                start: `${ this.props.getFormattedDateFullMonth( new Date(startTime) ) } - `,
                end: this.getEndTime(end)
            }
        }

        return {
            start: '',
            end: this.getEndTime(end),
            clazz: ' warning'
        }
    }

    renderItems = (arr) => {

        return arr.map((item) => {
            const { id } = item;
            const period = this.getPeriod(item);

            return (
                <li className="absent-list__item" value={id} key={id}>
                    <UserItem { ...item } />
                    <Dates { ...period }/>
                </li>
            )
        })
    }

    componentDidMount() {
        const { absentList, setNumberOfPages } = this.props;

        const numberOfPages = this.getNumberOfPages(absentList);
        this.setNumberOfPages(numberOfPages);
        setNumberOfPages(numberOfPages);
    }

    componentDidUpdate(prevProps, prevState) {
        const { absentList, setNumberOfPages, setFirstPage } = this.props;
        
        if (prevProps.absentList !== absentList
            || prevProps.setNumberOfPages !== setNumberOfPages
            || prevState.numberOfPages !== this.state.numberOfPages) {

                const numberOfPages = this.getNumberOfPages(absentList);
                this.setNumberOfPages(numberOfPages);
                setNumberOfPages(numberOfPages);
        }

        if (prevProps.absentFilter !== this.props.absentFilter
            || prevProps.datesFilter !== this.props.datesFilter) {
                setFirstPage();
            }
    }

    render() {
        const { absentList, onPrevPage, onNextPage } = this.props;
        
        const items = absentList 
            ? this.renderItems( this.getListToShow(absentList) ) 
            : '';
        
        return (
            <div className="absent-list-wrapper">
                <ArrowLarge onChangePage={ onPrevPage } />
                <ul className="absent-list">
                    { items }
                </ul>
                <ArrowLarge onChangePage={ onNextPage } clazz=" right"/>
            </div>
        )
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsers,
    }
};

export default withDataService(mapMethodsToProps)( 
    withFormattedDateFuncs( 
        withArrowFunction(AbsentsList)));