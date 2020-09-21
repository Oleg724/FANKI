import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">Упс!</span>
            <span>
                Что-то пошло не так
            </span>
            <span>
                в ближайшее время мы все исправим
            </span>
        </div>
    );
};

export default ErrorIndicator;