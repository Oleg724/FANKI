import React, { Component } from 'react';
import { withConstants } from '../hoc-helpers';
import List from '../list';
import './side-menu.css';

class SideMenu extends Component {

    render() {
        const { 
            getMainList, 
            getMainLabel, 
            getAdministratorList, 
            getAdministratorLabel } = this.props;

        const mainList = getMainList();
        const mainLabel = getMainLabel();
        const administratorList = getAdministratorList();
        const administratorLabel = getAdministratorLabel();

        return (
            <div className="side-menu">
                <div className="side-menu__item">
                    <List label={ mainLabel }
                        list={ mainList }  />
                </div>
                <div className="side-menu__item">
                    <List label={ administratorLabel }
                        list={ administratorList } />
                </div>
            </div>    
        )
    }
}

const mapMethodsToProps = (constants) => {
    return {
        getMainList: constants.getMainList,
        getMainLabel: constants.getMainLabel,
        getAdministratorList: constants.getAdministratorList,
        getAdministratorLabel: constants.getAdministratorLabel,
    }
};

export default withConstants(mapMethodsToProps)(SideMenu);