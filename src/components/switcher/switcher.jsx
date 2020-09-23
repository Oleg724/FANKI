import React from 'react';
import './switcher.css';

const Switcher = ({ activeClazz, toggleTimeBoardAppearence }) => {

    return (
        <p className={ `switcher${activeClazz}` } onClick={ () => toggleTimeBoardAppearence() } ></p>
    )
}

export default Switcher;