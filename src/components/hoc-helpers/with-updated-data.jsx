import React, { Component } from 'react';

const withUpdatedData = (View) => {
    return class extends Component {

        state = {
            userData: '',
            userId: '',
            numberOfPages: 1,
            numberOfItems: 1,
            numberOfItemsOnPage: 1,
            list: '',
        }
    
        getNumberOfPages = (arr, num) => {
            return Math.ceil(arr.length / num);
        }

        setNumberOfItemsOnPage = (num) => {
            this.setState({ numberOfItemsOnPage: num });
        }
    
        getItemsNumber = (arr) => {
            return arr.length;
        }
    
        getItemsList = (obj, dataName) => { 
            return obj[dataName];
        }
        
        setNumberOfPages = (num, inc = 0) => {
            num === 0
                ? this.setState({ numberOfPages: 0 })
                : this.setState({ numberOfPages: num + inc });
        }
    
        setItemsNumber = (num) => {
            this.setState({ numberOfItems: num });
        }
    
        setItemsList = (list) => {
            this.setState({ list: list });
        }
    
        getArrayFromObject = (obj) => {
            return Object.entries(obj);
        }
        
        isArray = (list) => {
            return Array.isArray(list);
        }
    
        setServiceStates = (userData, dataName) => {

            const { numberOfItemsOnPage, inc = 0 } = this.props;

            const dataList = this.getItemsList( userData, dataName );
    
            const dataListArray = (
                this.isArray(dataList)
                    ? dataList
                    : this.getArrayFromObject(dataList));
    
            this.setItemsList(dataList); 
    
            this.setNumberOfPages( 
                this.getNumberOfPages(dataListArray, numberOfItemsOnPage), inc);
    
            this.setItemsNumber(
                this.getItemsNumber(dataListArray));

            this.setNumberOfItemsOnPage(numberOfItemsOnPage, inc);
        }
    
        updateData() {
            const { userId, getData, dataName } = this.props; 
            
            if (!userId) {
                return;
            }
            
            getData(userId)
              .then( (userData) => {
                this.setState({         
                    userId,
                    userData,
                })

                this.setServiceStates(userData, dataName);
                })
                .catch();
        }

        componentDidMount() {
            this.updateData();
        }

        render() {
            return (
                <View { ...this.props } { ...this.state }/>
            )
        }
    }
}
export default withUpdatedData;