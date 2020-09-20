import React from 'react';

const withGettingIndiciesFuncs = (View) => {
    return (props) => {

        const getStartIndex = (page, numberOfItemsOnPage) => {
            return (page - 1) * (numberOfItemsOnPage);
        }
    
        const getEndIndex = (page, numberOfItemsOnPage) => {
            return page * (numberOfItemsOnPage);
        }
 
        return (
            <View { ...props } 
                getStartIndex={ getStartIndex }
                getEndIndex={ getEndIndex } />
        )
    }
}
export default withGettingIndiciesFuncs;