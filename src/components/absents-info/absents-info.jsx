import React, { Component } from 'react';
import HeadlineTitle from '../headline-title';
import Tab from '../tab';
import InfoPlate from '../info-plate';
import AbsentsList from '../absents-list';
import { withDataService, withData, withDate } from '../hoc-helpers';
import './absents-info.css';

class AbsentsInfo extends Component {

    _employeeTitle = 'сотрудник';

    state = {
        all: true,
        vacation: false,
        dayOff: false,
        sickLeave: false,
        allNumber: 0,
        vacationNumber: 0,
        dayOffNumber: 0,
        sickLeaveNumber: 0,
        absentFilter: '',
        absentList: [],
        filteredList: [],
        today: true,
        tomorrow: false,
        week: false,
        datesFilter: ''
    }

    _clearAllDatesFilter = () => {
        this.setState({
            today: false,
            tomorrow: false,
            week: false,
        })
    }

    setDatesFilter = (id) => {
        this._clearAllDatesFilter();
        
        this.setState({
            [`${id}`]: true,
            datesFilter: id,
        })
    }

    getSelectedDate = () => {
        const { datesFilter } = this.state;

        if (datesFilter === "tomorrow") {
            return this.props.getNextDay();
        } else if (datesFilter === "week") {
            return this.props.getNextWeek();
        } else {
            return new Date();
        }
    }

    getFilteredListByDate = (arr) => {
        const pointDate = this.getSelectedDate();

        return arr.filter((employee) => {
            const lastDay = new Date(employee.absence.period.end.before);
            return (lastDay - pointDate) / (1000 * 60 * 60 * 24) > 0;
        })
    }
    
    _clearAllAbsentFilter = () => {
        this.setState({
            all: false,
            vacation: false,
            dayOff: false,
            sickLeave: false
        })
    }

    setAbsentFilter = (id) => {
        this._clearAllAbsentFilter();

        this.setState({
            [`${id}`]: true,
            absentFilter: id,
        })
    }

    resetAbsentFlags = () => {
        this.setState({
            all: true,
            vacation: false,
            dayOff: false,
            sickLeave: false
        })
    }

    setAbsentTypeNumber = (arr) => {
        this.setState({
            allNumber: this.getFilteredList(arr, "all").length,
            vacationNumber: this.getFilteredList(arr, "vacation").length,
            dayOffNumber: this.getFilteredList(arr, "dayOff").length,
            sickLeaveNumber: this.getFilteredList(arr, "sickLeave").length,
        })
    }

    getFullAbsentList = (arr) => {
        return arr.filter((item) => {
            return item.absence.type !== ''; 
        })
    }

    getFilteredListByType = (arr, value) => {
        return arr.filter((item) => {
            return item.absence.type === value; 
        })
    }

    getAbsentFilteredItemsByType = (data, value) => {
        return !value || value === "all" 
            ? this.getFullAbsentList(data) 
            : this.getFilteredListByType(data, value);
    }

    getFilteredList = (arr, value) => {
        const filteredByDateList = this.getFilteredListByDate(arr);
        return this.getAbsentFilteredItemsByType(filteredByDateList, value);
    }

    getFormattedText = (text, num) => {
        if (num === 0) {
            return 'Нет';
        } else if (num === 1) {
            return text;
        } else if (num < 5) {
            return `${text}a`;
        }
        return `${text}ов`;
    }

    getFormattedNumber = (num) => {
        return num === 0 ? '' : num;
    }

    componentDidMount() {
        this.props.getData()
            .then((list) => {
                this.setState({
                    absentList: this.getFilteredListByDate(list)
                });
                this.setAbsentTypeNumber(list);
            })
            .catch();     
    }

    componentDidUpdate(prevProps, prevState) {
        const { 
            allNumber, 
            vacationNumber, 
            dayOffNumber, 
            sickLeaveNumber, 
            datesFilter, 
            absentList } = this.state;

            if (prevState.allNumber !== allNumber
                || prevState.vacationNumber !== vacationNumber
                || prevState.dayOffNumber !== dayOffNumber
                || prevState.sickLeaveNumber !== sickLeaveNumber
                || prevState.absentList !== absentList
                || prevState.datesFilter !== datesFilter) {

                this.setAbsentTypeNumber( this.getFilteredListByDate(absentList) );
        }
    }

    render() {
        const { 
            todayWithShortMonth: today, 
            tomorrowWithShortMonth: tomorrow,
            title,
            count } = this.props;

        const { 
            absentFilter, 
            datesFilter, 
            absentList,
            allNumber,
            vacationNumber,
            dayOffNumber,
            sickLeaveNumber } = this.state;
        
        const filteredList = this.getFilteredList(absentList, absentFilter)

        console.log(this.getFormattedNumber(sickLeaveNumber))

        return (
            <div className="absents-info">
                <div className="absents-info__inner">
                    <HeadlineTitle title={ title } count={ count }/>
                    <div className="tabs-wrapper">
                        <Tab day="Сегодня," date={ today } active={ this.state.today } 
                            actionHandler={ this.setDatesFilter } id="today"/>
                        <Tab day="Завтра," date={ tomorrow } active={ this.state.tomorrow } 
                            actionHandler={ this.setDatesFilter } id="tomorrow"/>
                        <Tab day="Неделя" active={ this.state.week } 
                            actionHandler={ this.setDatesFilter } id="week"/>
                    </div>
                </div>
                <div className="absents-info__inner">
                    <div className="info-plate-wrapper">
                        <InfoPlate 
                            actionHandler={ this.setAbsentFilter } id="all"
                            title="Все" count={ allNumber } 
                            text={ this.getFormattedText(this._employeeTitle, this.getFormattedNumber(allNumber)) } 
                            clazz="green"
                            active={ this.state.all } />
                        <InfoPlate 
                            actionHandler={ this.setAbsentFilter } id="vacation"
                            title="В отпуске" count={ vacationNumber } 
                            text={ this.getFormattedText(this._employeeTitle, this.getFormattedNumber(vacationNumber)) } 
                            clazz="blue"
                            active={ this.state.vacation } />
                        <InfoPlate 
                            actionHandler={ this.setAbsentFilter } id="dayOff" 
                            title="Отгул" count={ dayOffNumber } 
                            text={ this.getFormattedText(this._employeeTitle, this.getFormattedNumber(dayOffNumber)) } 
                            clazz="orange"
                            active={ this.state.dayOff } />
                        <InfoPlate 
                            actionHandler={ this.setAbsentFilter } id="sickLeave" 
                            title="Больничный" count={ sickLeaveNumber } 
                            text={ this.getFormattedText(this._employeeTitle, this.getFormattedNumber(sickLeaveNumber)) } 
                            clazz="red"
                            active={ this.state.sickLeave } />
                    </div>
                    <AbsentsList absentList={ filteredList } absentFilter={ absentFilter } datesFilter={ datesFilter } />
                </div>
            </div>
        )
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsers,
    }
};

export default withDataService(mapMethodsToProps)( withData( withDate(AbsentsInfo)));