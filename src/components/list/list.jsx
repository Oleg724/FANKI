import React, { Fragment, Component } from 'react';
import ListItem from '../list-item';
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

    getItems(arr) {
        return arr.map(({ id, ...props}) => {
            return (
                <ListItem { ...props } key={ id } id={ id } />
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