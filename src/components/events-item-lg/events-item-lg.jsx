import React from 'react';
import FeedbackButtons from '../feedback-buttons';
import CommentsElem from '../comments-elem';
import './events-item-lg.css';

const EventsItemLg = ({ 
    id, 
    icon, 
    creationTime, 
    adOwnerType,
    title,
    text,
    comments,
    likes,
    likes2,
    date,
    onHandleClick,
    isActive,
    clickedBtnId,
    btnId }) => {

    const getFormattedText = (num) => {
        if (comments === 1) return 'комментарий';
        if (comments < 5) return 'комментария';
        if (comments >= 5) return 'комментариев';
        return '';
    }

    const formattedText = getFormattedText(comments);

    return (
        <li className="events__item events-item-lg" key={ id }>
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

export default EventsItemLg;