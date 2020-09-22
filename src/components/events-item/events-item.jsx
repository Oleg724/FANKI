import React, { Component } from 'react';
import './events-item.css';

class EventsItem extends Component {

    state = {
        newClazz: '',
        blockDate: '',
        activeClazz: '',
    }

    isInLocalStorage = (id) => {
        return localStorage.getItem(id) ? true : false;
    }

    setItemToLocalStorage(e) {
        const id = e.currentTarget.id;
        localStorage.setItem(id, id);
    }

    onNewClazzRemove(e) {
        const { isNotActive, activeClazz, blockDate } = this.props;

        this.setItemToLocalStorage(e);
        this.setState({
            newClazz: '',
            blockDate: blockDate,
            activeClazz: isNotActive ? '' : activeClazz
        })
    }

    componentDidMount() {
        const { newClazz, activeClazz, blockDate } = this.props;

        if ( !this.isInLocalStorage(this.props.id) ) {
            this.setState({
                newClazz: newClazz,
                blockDate: 'Новое',
                activeClazz: activeClazz,
            })
        } else {
            this.setState({
                blockDate: blockDate,
                activeClazz: activeClazz,        
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { activeClazz, blockDate, newClazz } = this.props;

        if ( this.isInLocalStorage(this.props.id) ) {

            if (prevState.blockDate !== this.state.blockDate
                || prevState.activeClazz !== this.state.activeClazz) {

                this.setState({
                    blockDate: blockDate,
                    activeClazz: activeClazz           
                })
            }
        } else {

            if (prevProps.newClazz !== this.props.newClazz
                || prevProps.blockDate !== blockDate
                || prevProps.activeClazz !== activeClazz) {

                this.setState({
                    newClazz: newClazz,
                    blockDate: 'Новое',
                    activeClazz: activeClazz,
                })
            }
        }
    }

    render() {
        const { 
            id, 
            from, 
            icon, 
            title,
            date } = this.props;

        return (
            <li className={ `events__item events-item${ this.state.newClazz }${ this.state.activeClazz }` } 
                onClick={ (e) => this.onNewClazzRemove(e) } id={ id } >
                <div className={ `events-item__block-time` }>{ this.state.blockDate }</div>
                <img src={ icon } alt="" className="events-item__icon"/>              
                <div className="events-item__inner">
                    <div className="events-item__header">
                        <p className="events-item__name">{ from }</p>
                        <p className="events-item__time">{ date }</p>                  
                    </div>                   
                    <p className="events-item__text">{ title }</p>
                </div>                    
            </li>
        )
    }
}

export default EventsItem;