import React, { Component } from 'react';
import PaginationPoints from '../pagination-points';
import QueriesMessage from '../queries-message';
import QueriesItem from '../queries-item';
import { withDataService, withArrowFunction } from '../hoc-helpers';
import './queries.css';

class Queries extends Component {

    _baseText = 'несогласованн';
    _itemsOnPage = 1;

    state = {
        user: {},
        userId: '',
        numberOfPages: 1,
        numberOfQueries: 1,
        list: [],
    }

    getQueriesNames = (arr) => {
        return arr.map(({ name, query }) => name);
    }

    getListToShow = (arr) => {
        const { currentPage } = this.props;

        const startIdx = (currentPage - 1) * (this._itemsOnPage);
        const endIdx = currentPage * (this._itemsOnPage);

        return [...arr].slice(startIdx, endIdx);
    }

    getFormattedNames = (arr) => {
        return this.getQueriesNames(arr).join(' и ');
    }

    getQueriesNumber = (obj) => {
        return Object.keys(obj).length;
    }

    setQueriesNumber = (num) => {
        this.setState({ numberOfQueries: num });
    }

    setNumberOfPages = (num) => {
        this.setState({ numberOfPages: num });
    }

    getQueriesList = (obj) => { 
        return Object.entries(obj);
    }

    setQueriesList = (arr) => { 
        this.setState({ list: arr });
    }

    getFormattedText = (num, text) => {
        return num === 1 
            ? `${num} ${text}ый запрос`
            : `${num} ${text}ых запроса`;
    }

    _renderItems(list) {
        return list.map(([ name, text ]) => <QueriesItem name={ name } text={ text } key={ text }/>);
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

            console.log('1111')

            this.setQueriesList(
                this.getQueriesList(user) )

            this.setNumberOfPages(
                this.getQueriesNumber(user) );

            this.setQueriesNumber(
                this.getQueriesNumber(user) );
            })
            .catch();
    }

    componentDidMount() {
        this.updateItem();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userId !== prevProps.userId
            || this.props.getData !== prevProps.getData
            || this.state.list !== prevState.list
            || this.state.numberOfPages !== prevState.numberOfPages
            || this.state.numberOfQueries !== prevState.numberOfQueries
            || this.state.setNumberOfItems !== prevState.setNumberOfItems){ 
                this.updateItem();
                this.props.setNumberOfPages(this.state.numberOfPages);
                this.props.setNumberOfItems(this.state.numberOfEvents);
        }
    }

    render() {
        const { numberOfQueries, list } = this.state;   
        const { currentPage } = this.props;   

        console.log(list);

        const points = list 
            ? <PaginationPoints number={ list.length } currentPage={ currentPage } /> 
            : '';

        const text = this.getFormattedText(numberOfQueries, this._baseText);
        const name = this.getFormattedNames(list);

        const message = <QueriesMessage text={ text } name={ name }/>

        const items = this._renderItems( this.getListToShow(list), message );

        const rendereditemsInOrder = currentPage === 1 ? message : items;

        return (
            <div className="queries">
                <ul className="queries__list">
                    { rendereditemsInOrder }
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
        getData: dataService.getUsersQueries,
    }
};

export default withDataService(mapMethodsToProps)(Queries);