import React from 'react';
import arrowLeftIcon from '../../assets/chevron-left.png';
import './arrow-large.css';

const ArrowLarge = ({ onChangePage, clazz = '' }) => {

    return (
        <div className={`arrow-large${clazz}`} onClick={ onChangePage }>
            <img src={ arrowLeftIcon } alt="arrow" className="arrow-large__img"/>
        </div>
    )
}

export default ArrowLarge;