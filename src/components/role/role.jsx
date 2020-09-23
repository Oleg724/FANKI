import React from 'react';
import UserItem from '../user-item';
import RoleList from '../role-list';
import { withDataService, withData } from '../hoc-helpers';
import './role.css';

const Role = ({ 
    userId, 
    data: users, 
    showList = true, 
    showTimeBoard,
    toggleListAppearence,
    toggleTimeBoardAppearence }) => {

    const getUser = (arr) => {
        if ( Array.isArray(users) ) {
            return arr.find(item => item.id === userId);
        }
        return '';
    }

    const currentUserData = getUser(users);

    const list = showList 
        ? (
            <RoleList 
                toggleListAppearence={ toggleListAppearence }
                toggleTimeBoardAppearence={ toggleTimeBoardAppearence } 
                showTimeBoard={ showTimeBoard } />
        )
        : '';

    return (
        <div className="role">
            <UserItem { ...currentUserData } />
            <div className="role__inner">
                { list }
            </div>           
        </div>
    )
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsers,
    }
};

export default withDataService(mapMethodsToProps)( withData(Role) );