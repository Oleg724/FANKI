import React, { Component } from 'react';
import FeedbackButtons from '../feedback-buttons';
import CommentsElem from '../comments-elem';
import './events-item-lg.css';

class EventsItemLg extends Component { 
    
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
        this.setItemToLocalStorage(e);
        this.setState({
            newClazz: '',
            blockDate: this.props.blockDate,
        })
    }

    componentDidMount() {
        if ( !this.isInLocalStorage(this.props.id) ) {
            this.setState({
                newClazz: this.props.newClazz,
                blockDate: 'Новое',
                activeClazz: this.props.activeClazz,
            })
        } else {
            this.setState({
                blockDate: this.props.blockDate,
                activeClazz: this.props.activeClazz,    
            })
        }
    }
    
    render() {
        const { 
            id, 
            icon, 
            title,
            text,
            comments,
            likes,
            likes2,
            date,
            onHandleClick,
            isActive,
            clickedBtnId,
            btnId,
            formattedText } = this.props;
        
        return (
            <li className={ `events__item events-item-lg${ this.state.newClazz }${ this.state.activeClazz }` } 
                onClick={ (e) => this.onNewClazzRemove(e) } id={ id }>
                <div className={`events-item-lg__block-time`}>{ this.state.blockDate }</div>
                <img src={ icon } alt="" className="events-item-lg__image"/>
                <div className="events-item-lg__item">   
                    <p className="events-item-lg__time">{ date }</p> 
                    <p className="events-item-lg__title">{ title }</p>
                    <p className="events-item-lg__text">{ text }</p>
                    <div className="events-item-lg__inner">
                        <div className="events-item-lg__buttons">
                            <FeedbackButtons 
                                comments={ comments } 
                                likes={ likes } 
                                likes2={ likes2 }
                                onHandleClick={ onHandleClick }
                                isActive={ isActive }
                                clickedBtnId={ clickedBtnId }
                                id={ btnId } />
                            <CommentsElem num={ comments } text={ formattedText }/>
                        </div>  
                    </div>
                </div>                       
            </li>
        )
    }

}

export default EventsItemLg;