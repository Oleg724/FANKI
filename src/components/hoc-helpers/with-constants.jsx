import React from 'react';
import { ConstantsConsumer } from '../constants-context';

const withConstants = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <ConstantsConsumer>
                {
                    (constants) => {
                        const constantsProps = mapMethodsToProps(constants);
                        return (
                            <Wrapped {...props} {...constantsProps} />
                        )
                    }
                }
            </ConstantsConsumer>
        )
    }
}

export default withConstants;