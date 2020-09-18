import React from 'react';
import './dates.css';

const Dates = ({ start, end, clazz = "" }) => {
    return (
        <div className="dates">
            <span className={ `dates__text${clazz}` }>{ start }{ end }</span>    
        </div>
    )
}

export default Dates;