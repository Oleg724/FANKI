import React, { Component } from 'react';
import EventItem from '../event-item';
import PaginationPoints from '../pagination-points';
import { withDataService } from '../hoc-helpers';
import './events.css';

class Events extends Component {

    _itemsOnPage = 1;

    state = {
        user: {},
        userId: '',
        numberOfPages: 1,
        numberOfEvents: 1,
        list: [],
    }

    getListToShow = (arr) => {
        const { currentPage } = this.props;

        const startIdx = (currentPage - 1) * (this._itemsOnPage);
        const endIdx = currentPage * (this._itemsOnPage);

        return [...arr].slice(startIdx, endIdx);
    }

    getNumberOfPages = (arr) => {
        return Math.ceil(arr.length / 1);
    }

    getNumberOfEvents = (arr) => {
        return arr.length;
    }

    getEventsList = (arr) => { 
        return arr.events;
    }
    
    setNumberOfPages = (num) => {
        this.setState({ numberOfPages: num });
    }

    setNumberOfEvents = (num) => {
        this.setState({ numberOfEvents: num });
    }

    setEventsList = (list) => {
        this.setState({ list: list });
    }

    updateItem() {
        const { userId, getData } = this.props; 
        
        if (!userId) {
            return;
        }
        
        getData(userId)
          .then( (user) => {
            this.setState({         
                userId,
                user,
            })

            const eventsList = this.getEventsList(user);

            this.setEventsList(eventsList); 

            this.setNumberOfPages( 
                this.getNumberOfPages( eventsList ));

            this.setNumberOfEvents(
                this.getNumberOfEvents( eventsList ));   
            })
            .catch();
    }

    _renderItems(list) {
        return list.map((item) => <EventItem item={ item } key={ item.title }/>);
    }
    
    componentDidMount() {
        this.updateItem();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userId !== prevProps.userId
            || this.props.getData !== prevProps.getData
            || this.state.list !== prevState.list
            || this.state.numberOfPages !== prevState.numberOfPages
            || this.state.numberOfEvents !== prevState.numberOfEvents
            || this.state.setNumberOfItems !== prevState.setNumberOfItems){ 
                this.updateItem();
                this.props.setNumberOfPages(this.state.numberOfPages);
                this.props.setNumberOfItems(this.state.numberOfEvents);
        }
    }

    render() {
        const { list } = this.state;
      
        const items = this._renderItems( this.getListToShow(list) );

        const points = list 
            ? <PaginationPoints number={ list.length } currentPage={ this.props.currentPage } /> 
            : '';

        return (
            <div className="events-wrapper">
                <ul className="events__list">
                    { items }
                </ul>
                <div className="points-wrapper">
                    { points }
                </div>
            </div>
        )
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsersEvents,
    }
};

export default withDataService(mapMethodsToProps)(Events);