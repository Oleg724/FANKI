import React, { Fragment, Component } from 'react';
import Arrow from '../arrow';
import './list.css';

export default class List extends Component {

    state = {
        showList: true,
    }

    toggleShowList = () => {
        this.setState((prev) => {
            return {
                showList: !prev.showList
            }
        })
    }

    getItems(obj) {
        return Object.entries(obj).map(([name, icon]) => {

            return (
                <li className="list__item" key={ name }>
                    <span className="list__icon">{ icon }</span>
                    <p className="list__text">{ name }</p>    
                </li>
            )
        })
    }
  
    render() {
        const { showList } = this.state;
        const items = showList ? this.getItems(this.props.list) : '';

        return (
            <Fragment>
                <div className="label-wrapper" onClick={ this.toggleShowList }>  
                    <p className="label">{ this.props.label }</p>
                    <Arrow rotate={ showList }/>
                </div> 
                <ul className="list">
                    { items }
                </ul>
            </Fragment>
        )
    }
}