import React from 'react';
import { withFormattedDateFuncs } from '../hoc-helpers';
import './time-board.css';

const TimeBoard = ({ getFormattedDateFullMonthAndTime }) => {

    const currentDateAndTime = getFormattedDateFullMonthAndTime( new Date() );

    return (
        <div className="time-board">
            <p className="time-board__time">{ currentDateAndTime }</p>
        </div>
    )
}

export default withFormattedDateFuncs(TimeBoard);