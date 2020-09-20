import React from 'react';
import { ServiceConsumer } from '../service-context';

const withDataService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (dataService) => {
                        const serviceProps = mapMethodsToProps(dataService);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </ServiceConsumer>
        )
    }
}

export default withDataService;