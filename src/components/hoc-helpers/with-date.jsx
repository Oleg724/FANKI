import React, { Component } from 'react';

const withDate = (View) => {
    return class extends Component {
        state = {
            todayWithShortMonth: '',
            tomorrowWithShortMonth: '',
            weekWithShortMonth: '',
        }

        checkDateOnToday(obj) {
            const now = new Date();
            const todayDay = now.getDay();
            const todayMounth = now.getMonth();
            const todayYear = now.getYear();

            const date = new Date(obj);
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getYear();

            if ( todayDay - day && todayMounth - month && todayYear - year ) {
                return true
            }

            return false;
        }
    
        getCurrentDate() {
            return new Date();
        }

        getHoursOnly(obj) {
            return new Date(obj).getHours();
        }

        getMinutesOnly(obj) {
            return new Date(obj).getMinutes();
        }

        getHoursAndMinutesOnly(hours, minutes) {
            return `${ hours }:${ minutes }`;
        }

        getNextDay() {
            const tomorrow = this.getCurrentDate();
            return new Date(tomorrow.setDate(tomorrow.getDate() + 1));
        }

        getNextWeek() {
            const week = this.getCurrentDate();
            return new Date(week.setDate(week.getDate() + 7));
        }
    
        getFormattedDate(obj) {
            const mounths = ['янв', 'фев', 'мар', 'апр', 
                'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
                
            const date = obj.getDate();
            const mounth = mounths[ obj.getMonth() ];
    
            return `${ date  } ${ mounth }`
        }

        getFormattedDateFullMonth = (obj) => {
            const mounths = ['января', 'февраля', 'марта', 'апреля', 
                'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 
                'ноября', 'декабря'];

            const date = obj.getDate();
            const mounth = mounths[ obj.getMonth() ];
            const year = obj.getFullYear();
            return `${ date } ${ mounth } ${ year }`
        }

        getFormattedDateFullMonthAndTime(obj) {
            const mounths = ['января', 'февраля', 'марта', 'апреля', 
                'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 
                'ноября', 'декабря'];

            const date = obj.getDate();
            const mounth = mounths[ obj.getMonth() ];
            const year = obj.getFullYear();
            const hours = obj.getHours();
            const minutes = obj.getMinutes();
      
            return `${ date } ${ mounth } ${ year }, ${ hours }:${ minutes }0`;
        }
    
        getHours = (date) => {
            const timeArr = date.split('T').slice(-1);
            const timeArrWithoutSec = [...timeArr.join('').split(':').slice(0, 2)];
            return timeArrWithoutSec.join(':');
        }

        componentDidMount() {
            this.setState({
                todayWithShortMonth: this.getFormattedDate( this.getCurrentDate() ),
                tomorrowWithShortMonth: this.getFormattedDate( this.getNextDay() ),
                weekWithShortMonth: this.getFormattedDate( this.getNextWeek() ),
            });
        }

        render() {
            return (
                <View { ...this.props } { ...this.state }                   
                    getHours={ this.getHours }
                    getNextDay={ this.getNextDay }
                    getNextWeek={ this.getNextWeek }
                    getFormattedDateFullMonth={ this.getFormattedDateFullMonth }
                    getFormattedDateFullMonthAndTime={ this.getFormattedDateFullMonthAndTime }
                    getCurrentDate={ this.getCurrentDate }                   
                    setDate={ this.setDate }
                    getHoursAndMinutesOnly={ this.getHoursAndMinutesOnly }
                    checkDateOnToday={ this.checkDateOnToday } 
                    />
            )
        }
    }
}
export default withDate;