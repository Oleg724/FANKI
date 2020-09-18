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
        base: false
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

    componentDidMount() {
        this.setState({
            [this.props.event]: true
        })
    }

    render() {
        const { onNextPage, onPrevPage, title } = this.props;

        const information = this.getInformationBlock();

        return (
            <div className="slider-list">
                <div className="slider-list__arrow slider-list__arrow--left">
                    <ArrowLarge onChangePage={ onPrevPage } />
                </div>
                <div className="slider-list__item">
                    <HeadlineTitle title={ title } count={ this.state.numberOfItems } />
                </div>
                <div className="slider-list__item slider-list__item--lg">
                    { information }
                </div>
                <div className="slider-list__arrow slider-list__arrow--right">
                    <ArrowLarge onChangePage={ onNextPage } clazz={' right'} />
                </div>
                <div className="slider-list__item">
                    <LinkItem title={ title } />
                </div>
            </div>
        )
    }
}

export default withArrowFunction(SliderList);