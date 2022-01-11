import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <dib className="page__wrapper">
            {pagesArray.map(p => 
                <span 
                    onClick={() => changePage(p)}
                    key={p} 
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>    
            )}
        </dib> 
    );
};

export default Pagination;