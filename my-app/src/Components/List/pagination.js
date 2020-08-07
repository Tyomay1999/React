import React from 'react';
import './pagination.css';

const Pagination = () => {
    return(
        <div className="Pagination">
            <button 
                className='Pagination-button'
            >
                &larr;
            </button>
                <span
                    className='Pagination-info'
                >
                    Page <b>1</b> of <b>5</b>
                </span>
            <button 
                className='Pagination-button'
            >
                &rarr;
            </button>

        </div>
    )
}
export default Pagination;