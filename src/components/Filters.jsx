import React from 'react';
import RemoveFilter from './icons/RemoveFilter';

const Filters = ({ filters, clearAll, clearFilter }) => {
  return (
    <div className='filters-container'>
      <div className='filters'>
        <div className='active-filters'>
          {filters.map((tag) => (
            <h3 key={tag} className='filter-tag'>
              {tag}
              <button onClick={() => clearFilter(tag)} className='remove-btn'>
                <RemoveFilter />
              </button>
            </h3>
          ))}
        </div>
        <button onClick={clearAll} className='clear-btn'>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
