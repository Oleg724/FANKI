import React from 'react';
import './arrow.css';

const Arrow = ({ rotate }) => {

    const clazz = rotate ? '' : ' rotate';

    return (
        <div className={`arrow${clazz}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="#1D1C1D" fillRule="evenodd" d="M12 15.5a.997.997 0 01-.707-.293l-4-4a.999.999 0 
                    111.414-1.414l3.305 3.305 3.293-3.18a1 1 0 011.39 1.439l-4 3.862A.997.997 0 0112 15.5z" 
                    clipRule="evenodd"/>
                <mask id="a" width="11" height="7" x="6" y="9" maskUnits="userSpaceOnUse">
                    <path fill="#fff" fillRule="evenodd" d="M12 15.5a.997.997 0 01-.707-.293l-4-4a.999.999 0 
                        111.414-1.414l3.305 3.305 3.293-3.18a1 1 0 011.39 1.439l-4 3.862A.997.997 0 0112 15.5z" 
                        clipRule="evenodd"/>
                </mask>
                <g mask="url(#a)">
                    <path fill="#1D1C1D" d="M0 0h24v24H0z"/>
                </g>
            </svg>
        </div>
    )
}

export default Arrow;