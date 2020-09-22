import React, { Component } from 'react';

const withFormattedDateFuncs = (View) => {
    return class extends Component {

        state = {
            todayWithShortMonth: '',
            tomorrowWithShortMonth: '',
            weekWithShortMonth: '',
        }

        getTodayWordWithTime = (time) => {
            return `Сегодня, ${ time }`;
        }

        getTodayWord = () => {
            return 'Сегодня';
        }

        getYesterdayWord = () => {
            return 'Вчера';
        }

        checkDateOnToday(obj) {
            const now = new Date();
            const date = new Date(obj);

            if ( now.getDate() === date.getDate() 
                && now.getMonth() === date.getMonth() 
                && now.getYear() === date.getYear() ) {
                return true
            }       
            return false;      
        }

        checkDateOnYesterday(obj) {
            const now = new Date();
            const date = new Date(obj);

            if ( now.getDate() === date.getDate() + 1 
                && now.getMonth() === date.getMonth() 
                && now.getYear() === date.getYear() ) {
                return true
            }       
            return false;      
        }

        addNullToNumber(num) {
            return `0${ num }`;
        }
    
        getCurrentDate() {
            return new Date();
        }

        getHoursOnly(obj) {
            return new Date(obj).getHours();
        }

        getMinutesOnly = (obj) => {
            const minutes = new Date(obj).getMinutes();

            if (minutes < 10) {
                return this.addNullToNumber(minutes);
            }
            return minutes;
        }

        getHoursAndMinutesOnly = (obj) => {
            return `${ this.getHoursOnly(obj) }:${ this.getMinutesOnly(obj) }`;
        }

        getNextDay = () => {
            const today = this.getCurrentDate();
            return new Date(today.setDate(today.getDate() + 1));
        }

        getNextWeek = () => {
            const today = this.getCurrentDate();
            return new Date(today.setDate(today.getDate() + 7));
        }

        getFullMonthName(num) {
            const mounths = ['января', 'февраля', 'марта', 'апреля', 
                'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 
                'ноября', 'декабря'];
            
            return mounths[num];
        }

        getShortMonthName(obj) {
            const mounths = ['янв', 'фев', 'мар', 'апр', 
                'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

                return mounths[ obj.getMonth() ];
        }
    
        getDayAndShortMonth = (obj) => {
            return `${ obj.getDate() } ${ this.getShortMonthName(obj) }`
        }

        getFormattedDateFullMonth = (obj) => {
            const month = this.getFullMonthName( obj.getMonth() );
            return `${ obj.getDate() } ${ month } ${ obj.getFullYear() }`;
        }

        getTwoIntegerNumber(str) {
            return str < 10 
                ? this.addNullToNumber(str) 
                : str;
        }

        getFullDateFromStr(str) {
            const date = new Date(str).getDate();
            const mounth = new Date(str).getMonth();
            const year = new Date(str).getFullYear();

            return `${ date } ${ mounth } ${ year }`;
        }

        getFormattedDateFullMonthAndTime = (obj) => {
            const date = obj.getDate();
            const mounth = obj.getMonth();
            const year = obj.getFullYear();
            const hours = obj.getHours();
            const minutes = obj.getMinutes();
      
            return `${ date } ${ this.getFullMonthName(mounth) } ${ year }, 
                ${ this.getTwoIntegerNumber(hours) }:${ this.getTwoIntegerNumber(minutes) }`;
        }

        componentDidMount() {
            this.setState({
                todayWithShortMonth: this.getDayAndShortMonth( this.getCurrentDate() ),
                tomorrowWithShortMonth: this.getDayAndShortMonth( this.getNextDay() ),
                weekWithShortMonth: this.getDayAndShortMonth( this.getNextWeek() ),
            });
        }

        funcs = {
            setDate: this.setDate,
            getCurrentDate: this.getCurrentDate,  
            getNextDay: this.getNextDay,
            getDayAndShortMonth: this.getDayAndShortMonth,
            getNextWeek: this.getNextWeek,
            getFormattedDateFullMonth: this.getFormattedDateFullMonth,
            getFormattedDateFullMonthAndTime: this.getFormattedDateFullMonthAndTime,                                    
            checkDateOnToday: this.checkDateOnToday,
            getHoursAndMinutesOnly: this.getHoursAndMinutesOnly,
            getFullDateFromStr: this.getFullDateFromStr,
            checkDateOnYesterday: this.checkDateOnYesterday,
            getTodayWordWithTime: this.getTodayWordWithTime,
            getTodayWord: this.getTodayWord,
            getYesterdayWord: this.getYesterdayWord
        } 

        render() {
            return (
                <View { ...this.props } { ...this.state } { ...this.funcs } />
            )
        }
    }
}
export default withFormattedDateFuncs;