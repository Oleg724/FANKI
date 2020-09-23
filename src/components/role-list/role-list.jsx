import React from 'react';
import { Link } from 'react-router-dom';
import { withConstants } from '../hoc-helpers';
import Switcher from '../switcher';
import './role-list.css';

const RoleList = ({ 
    getRoleList,  
    toggleListAppearence, 
    toggleTimeBoardAppearence, 
    showTimeBoard }) => {

    const list = getRoleList();

    const activeClazz = showTimeBoard ? ' active' : '';

    const items = list.map(({ title, icon, isLink, path, alt, id }) => {

        let item = '';

        if (isLink) {
            item = (
                <Link to={ path } onClick={ () => toggleListAppearence() } key={ id }>
                    <div className="role-list__item">
                        <img className="role-list__icon" src={ icon } alt={ alt } />
                        <p className="role-list__text">{ title }</p> 
                    </div>             
                </Link>
            )
        } else {
            item = (
                <div className="role-list__item" key={ id }>
                    <img className="role-list__icon" src={ icon } alt={ alt } />
                    <p className="role-list__text">{ title }</p>
                    <div className="role-list__inner">
                        <Switcher activeClazz={ activeClazz } toggleTimeBoardAppearence={ toggleTimeBoardAppearence } />
                    </div> 
                </div>
            )
        }

        return item;
    });

    return (     
        <ul className="role-list">
            { items }
        </ul>
    )
};

const mapMethodsToProps = (constants) => {
    return {
        getRoleList: constants.getRoleList,
    }
};

export default withConstants(mapMethodsToProps)(RoleList);