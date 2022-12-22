import React, { useState } from 'react';
import Header from './components/Header';
import Vacancy from './components/job/Vacancy';
import Filters from './components/Filters';

import vacancies from './data/data.json';
import Vacancies from './components/job/Vacancies';

function App() {
  const [filters, setFilters] = useState([]);
  const handleFilters = (tag) => {
    if (!filters.includes(tag)) setFilters([...filters, tag]);
  };

  const reset = () => setFilters([]);
  const removeFilter = (tag) =>
    setFilters(filters.filter((item) => item !== tag));

  return (
    <div className='App'>
      <Header />

      {filters.length > 0 && (
        <Filters
          filters={filters}
          clearAll={reset}
          clearFilter={removeFilter}
        />
      )}

      <Vacancies
        filters={filters}
        handleFilters={handleFilters}
        items={vacancies}
      />

      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        .
      </div>
    </div>
  );
}

export default App;
