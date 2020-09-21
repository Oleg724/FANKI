import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
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
                <li className="list__item link" key={ name }>
                    {/* оставил заглушку */}
                    <Link className="link__item" to="/">  
                        <span className="link__icon">{ icon }</span>
                        <p className="link__text">{ name }</p> 
                    </Link>   
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