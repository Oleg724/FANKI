import React from 'react';
import './tab.css';

const Tab = ({ day, date, active, actionHandler, id }) => {

    const activeClass = active ? ' active' : '';

    return (
        <div className={ `tab${activeClass}` } 
            onClick={ () => actionHandler(id) } id={ id } key={ id }>

                <p className="tab__text">{ day } { date }</p>
        </div>
    )
}

export default Tab;