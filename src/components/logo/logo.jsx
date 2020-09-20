import React from 'react';
import logoIcon from '../../assets/group-69.png';
import logoImage from '../../assets/fanki-logo.png';

import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={ logoIcon } alt="Fanki logo" className="logo__icon"/>
            <img src={ logoImage } alt="Fanki text" className="logo__img"/>
        </div>
    )
}

export default Logo;