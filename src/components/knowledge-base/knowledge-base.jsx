import React, { Component } from 'react';
import { withDataService } from '../hoc-helpers';
import './knowledge-base.css';

class KnowledgeBase extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.props.getData()
            .then((list) => {

                this.setState({ 
                    list: list,
                    });
            })
            .catch();      
    }

    render() {
        const { list } = this.state;

        const items = list.map((article) => {
            return (
                <p className="knowledge-base__text">
                    { article.text }
                </p> 
            )
        })

        return (
            <div className="knowledge-base">
                <ul className="knowledge-base__list">
                    { items }
                </ul>
            </div>
        )
    }
}

const mapMethodsToProps = (dataService) => {
    return {
        getData: dataService.getUsers,
    }
};

export default withDataService(mapMethodsToProps)(Events);