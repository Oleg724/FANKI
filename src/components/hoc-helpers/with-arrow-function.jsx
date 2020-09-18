import React, { Component } from 'react';

const withArrowFunction = (View) => {
    return class extends Component {

        state = {
            currentPage: 1,
            numberOfPages: 0
        }

        setFirstPage = () => {
            this.setState({ currentPage: 1 });
        }

        setNumberOfPages = (num) => {
            this.setState({ numberOfPages: num });
        }

        onNextPage = () => {
            const  { currentPage, numberOfPages } = this.state;

            if (currentPage === numberOfPages) {
                return '';
            }

            this.setState((prev) => {
                return {
                    currentPage: prev.currentPage + 1
                }
            })
        }
    
        onPrevPage = () => {
            const  { currentPage } = this.state;

            if (currentPage === 1) {
                return '';
            }

            this.setState((prev) => {
                return {
                    currentPage: prev.currentPage - 1
                }
            })
        }

        render() {
            return (
                <View { ...this.props } { ...this.state } 
                    onNextPage={ this.onNextPage } onPrevPage={ this.onPrevPage }
                    setFirstPage={ this.setFirstPage } setNumberOfPages={ this.setNumberOfPages } />
            )
        }
    }
}
export default withArrowFunction;