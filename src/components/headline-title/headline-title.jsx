import React from 'react';
import './headline-title.css';

const HeadlineTitle = ({ title = "Headline title", count = "2" }) => {

    const $count = <div className="headline-title__count">{ count }</div>;

    const countItem = count ? $count : "";

    return (
        <div className="headline-title">
            <div className="headline-title__title">{ title }</div> 
            { countItem }
        </div>
    )
}

export default HeadlineTitle;