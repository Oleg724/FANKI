import React from 'react';
import './info-plate.css';

const InfoPlate = ({ 
    title, 
    count = "", 
    text = "Нет", 
    clazz = "", 
    id = "",
    active = '', 
    actionHandler }) => {

        const activeClass = active ? ' active' : '';

    return (
        <div className={ `info-plate${activeClass}` } 
            onClick={ () => actionHandler(id) } id={ id } key={ id }>
                
                <span className={clazz}></span>
                <p className="info-plate__title">{ title }</p>
                <p className="info-plate__text">{ count } { text }</p>
        </div>
    )
}

export default InfoPlate;