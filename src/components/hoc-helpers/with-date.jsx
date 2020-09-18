import React, { Component } from 'react';

const withDate = (View) => {
    return class extends Component {
        state = {
            todayWithShortMonth: '',
            tomorrowWithShortMonth: '',
            weekWithShortMonth: '',
        }
    
        getCurrentDate() {
            return new Date();
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

        getFormattedDateFullMonth(obj) {
            const mounths = ['января', 'февраля', 'марта', 'апреля', 
                'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 
                'ноября', 'декабря'];
                
            const date = obj.getDate();
            const mounth = mounths[ obj.getMonth() ];
            const year = obj.getFullYear();
    
            return `${ date } ${ mounth } ${ year }`
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
                    getFormattedDateFullMonth={ this.getFormattedDateFullMonth }
                    getHours={ this.getHours }
                    getNextDay={ this.getNextDay }
                    getNextWeek={ this.getNextWeek }
                    getCurrentDate={ this.getCurrentDate }
                    setDate={ this.setDate } />
            )
        }
    }
}
export default withDate;