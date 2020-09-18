import React from 'react';
import './pagination-points.css';

const PaginationPoints = ({ number = 0, currentPage }) => {

    const points = [...Array(number)].map((item, idx) => {
        return idx === currentPage - 1
            ? <span className="active" key={ idx }></span>
            : <span key={ idx }></span>
    });
    
    return (
        <ul className="pagination-points">
            { points }
        </ul>
    )
}

export default PaginationPoints;