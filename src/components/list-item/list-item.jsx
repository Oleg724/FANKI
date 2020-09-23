import React from 'react';
import { Link } from 'react-router-dom';
import ListItemInfo from '../list-item-info';
import InfoImage from '../../assets/question-mark-circle.png';
import './list-item.css';

const ListItem = ({ id, title, icon, path = "/", description }) => {

    return (
        <li className="list-item" key={ id } >
            <Link className="list-item__item" to={ path }>  
                <span className="list-item__icon">{ icon }</span>
                <p className="list-item__text">{ title }</p> 
                <div className="list-item__inner">
                    <div className="list-item__img img">
                        <img className="img__img" src={ InfoImage } alt="question mark in circle"/>
                    </div>
                    <div className="list-item__info">
                        <ListItemInfo { ...description } />
                    </div>
                </div>
            </Link>   
        </li>
    )
}

export default ListItem;