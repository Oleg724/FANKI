import React, { Component } from 'react';

const withData = (View) => {
    return class extends Component {
        state = {
            data: '',
        }
    
        componentDidMount() {
            this.dataUpdate();
        }
    
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
              this.dataUpdate();
            }
        }
    
        dataUpdate() {
            const { getData } = this.props;
    
            getData()
                .then((data) => {
                    this.setState({ data })
                })
        }

        render() {
            return (
                <View { ...this.props } data={ this.state.data }/>
            )
        }
    }
}
export default withData;