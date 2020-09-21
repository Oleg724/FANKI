import React, { Component } from 'react';
import likeIcon from '../../assets/emote.png';
import smileIcon from '../../assets/smile.png';
import './feedback-buttons.css';

class FeedbackButtons extends Component {

    state = {
        activeClass: ''
    }

    // setActiveClass = (isActive, id) => {
        
    //     const clazzActiveLeft = '';
    //     const clazzActiveRight = '';

    //     if (isActive && id === "leftBtn") {
    //         return clazzActiveLeft = " active";
    //     } else if (isActive && id === "rightBtn") {
    //         return clazzActiveRight === " active";
    //     }

    //     return '';
    // }
    
    // onActiveClassSet = (id) => {
    //     const { onHandleClick, isActive, id } = this.props;

    //     this.setSTate({
    //         activeClass: this.setActiveClass(isActive, id)
    //     })
    //     onHandleClick(id);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const { activeClass } = this.state;
    //     const { isActive, id } = this.props;

    //     if (prevProps.isActive !== isActive
    //         || prevProps.id !== id
    //         || prevState.activeClass !== activeClass) {

    //         this.setState({ activeClass: this.setActiveClass(isActive, id) });
    //     }  
    // }

    render() {
        const { clazz = "", likes, likes2, onHandleClick } = this.props;

        return (
            <div className="feedback-buttons">
                <div className={`feedback-buttons__item${ clazz }${ this.state.activeClass }`}
                    id="leftBtn" onClick={ (e) => onHandleClick(e) } >

                    <img src={ likeIcon } alt="emote" className="feedback-buttons__img"/>
                    <p className="feedback-buttons__count">{ likes }</p>
                </div>
                <div className={`feedback-buttons__item${ this.state.activeClass }`}
                     id="rightBtn" onClick={ (e) => onHandleClick(e) }>

                    <img src={ likeIcon } alt="emote" className="feedback-buttons__img"/>  
                    <p className="feedback-buttons__count">{ likes2 }</p> 
                </div>
                <div className="feedback-buttons__item">
                    <img src={ smileIcon } alt="smile" className="feedback-buttons__img"/>    
                </div>
            </div>
        )
    }
}

export default FeedbackButtons;