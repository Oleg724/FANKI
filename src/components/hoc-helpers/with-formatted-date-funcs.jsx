import React, { Component } from 'react';

const withFormattedDateFuncs = (View) => {
    return class extends Component {

        state = {
            todayWithShortMonth: '',
            tomorrowWithShortMonth: '',
            weekWithShortMonth: '',
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
            const tomorrow = this.getCurrentDate();
            return new Date(tomorrow.setDate(tomorrow.getDate() + 1));
        }

        getNextWeek = () => {
            const week = this.getCurrentDate();
            return new Date(week.setDate(week.getDate() + 7));
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
    
        getDayAndShortMonth(obj) {
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
            getNextWeek: this.getNextWeek,
            getFormattedDateFullMonth: this.getFormattedDateFullMonth,
            getFormattedDateFullMonthAndTime: this.getFormattedDateFullMonthAndTime,                                    
            checkDateOnToday: this.checkDateOnToday,
            getHoursAndMinutesOnly: this.getHoursAndMinutesOnly
        } 

        render() {
            return (
                <View { ...this.props } { ...this.state } { ...this.funcs } />
            )
        }
    }
}
export default withFormattedDateFuncs;