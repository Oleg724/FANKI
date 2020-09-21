import React, { Component } from 'react';
import ArrowLarge from '../arrow-large';
import HeadlineTitle from '../headline-title';
import LinkItem from '../link-item';
import Events from '../events';
import Queries from '../queries';
import { withArrowFunction } from '../hoc-helpers';

import './slider-list.css';

class SliderList extends Component {

    state = {
        numberOfPages: 1,
        numberOfItems: 1,
        queries: false,
        events: false,
        base: false,
        informationComponent: ''
    }

    setNumberOfPages = (num) => {
        this.props.setNumberOfPages(num);
    }

    setNumberOfItems = (num) => {
        this.setState({ numberOfItems: num });
    }

    getInformationBlock() {
        const { userId, currentPage } = this.props;
        const { queries, events, base } = this.state;

        console.log(userId);

        if (!userId) {
            return;
        }

        if (queries) return (
            <Queries userId={ userId } currentPage={ currentPage }
                setNumberOfPages={ (num) => this.setNumberOfPages(num) } 
                setNumberOfItems={ (num) => this.setNumberOfItems(num) } />
        )
        if (events) return (
            <Events userId={ userId } currentPage={ currentPage } 
                setNumberOfPages={ (num) => this.setNumberOfPages(num) } 
                setNumberOfItems={ (num) => this.setNumberOfItems(num) } />
        )
        if (base) return 'Нет публикаций';
    }

    setInformationBlock() {
        this.state({
            informationItems: this.getInformationBlock()
        })
    }

    componentDidMount() {
        this.setState({
            [this.props.event]: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { setNumberOfPages, userId, currentPage } = this.props;
        const { 
            informationComponent, 
            setNumberOfItems, 
            queries, 
            events, 
            base } = this.state;

        if (setNumberOfPages !== prevProps.setNumberOfPages 
            || userId !== prevProps.userId
            || currentPage !== prevProps.currentPage
            || informationComponent !== prevState.informationComponent
            || setNumberOfItems !== prevState.setNumberOfItems) {
            this.getInformationBlock();
        }
    }

    render() {
        const { onNextPage, onPrevPage, title } = this.props;
        const { informationComponent } = this.state;

        return (
            <div className="slider-list">
                <div className="slider-list__arrow slider-list__arrow--left">
                    <ArrowLarge onChangePage={ onPrevPage } />
                </div>
                <div className="slider-list__item">
                    <HeadlineTitle 
                        title={ title } 
                        count={ this.state.numberOfItems } />
                </div>
                <div className="slider-list__item slider-list__item--lg">
                    { informationComponent }
                </div>
                <div className="slider-list__arrow slider-list__arrow--right">
                    <ArrowLarge onChangePage={ onNextPage } 
                        clazz={' right'} />
                </div>
                <div className="slider-list__item">
                    <LinkItem title={ title } />
                </div>
            </div>
        )
    }
}

export default withArrowFunction(SliderList);