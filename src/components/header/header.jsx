import React, { Component } from 'react';
import MessageIndicator from '../message-indicator';
import Role from '../role';
import { withDataService } from '../hoc-helpers';
import Logo from '../logo';
import Arrow from '../arrow';

import './header.css';

class Header extends Component {

    state = {
        number: '',
        showList: false,
    }

    toggleListAppearence = () => {
        if (this.state.showList) {
            this.setState({ showList: false })
        } else {
            this.setState({ showList: true })
        }
    }

    selectedId = (id) => {
        this.props.selectedId(id);
        this.setState({ showList: false });
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.getNumber !== prevProps.getNumber) {
          this.updateItem();
        }
    }

    updateItem() {
        const { getNumber } = this.props;

        getNumber()      
            .then( (number) => {
                this.setState({ number })
            })
            .catch();
    }

    render() {
        const { showList, number } = this.state;
        const { userId } = this.props;

        return (
            <header className="header">
                <div className="header__inner">
                    <div className="header__item">
                        <Logo/>
                    </div>
                    <div className="header__item">
                        <MessageIndicator number={ number }/>
                    </div>
                    <div className="header__item" onClick={ this.toggleListAppearence }>
                        <Role 
                            showList={ showList }
                            userId={ userId }
                            selectedId={ this.selectedId }/>
                    </div>
                    <div className="header__item" onClick={ this.toggleListAppearence }>
                        <Arrow rotate={ showList }/>
                    </div>
                </div>
            </header>
        )
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getNumber: dataService.getNumerOfMessages,
    }
};

export default withDataService(mapMethodsToProps)(Header);