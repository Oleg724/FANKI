import React from 'react';
import UserItem from '../user-item';
import { withDataService, withData } from '../hoc-helpers';

import './role.css';

const Role = ({ userId, data: users, showList = true }) => {

    const getUser = (arr) => {
        const currentUserIdx = arr.findIndex(item => item.id === userId);

        return [...arr].slice(currentUserIdx, currentUserIdx + 1);
    }

    const getUsers = (arr) => {
        const currentUserIdx = arr.findIndex(item => item.id === userId);

        const currentUser = [...arr].slice(currentUserIdx, currentUserIdx + 1);
        const start = [...arr].slice(0, currentUserIdx);
        const end = [...arr].slice(currentUserIdx + 1);

        return [
            ...currentUser,
            ...start,
            ...end,
        ];
    }

    const _renderItems = (arr) => {

        return arr.map((item, idx) => {

            if (idx > 0) return; // заглушка

            const { id } = item;

            return (
                <li className="role__item" value={id} key={id} >
                    <UserItem { ...item } />
                </li>
            )
        })
    }

    let items = [];

    if (users && showList) {
        items = _renderItems( getUsers(users) );
    } else if (users && !showList) {
        items = _renderItems( getUser(users) );
    }

    return (
        <ul className="role">
            { items }
        </ul>
    )
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsers,
    }
};

export default withDataService(mapMethodsToProps)( withData(Role));