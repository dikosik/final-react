import React, { useMemo } from 'react';
import jobData from '../../data/data.json';
import Vacancy from './Vacancy';

const Vacancies = ({ items, filters, handleFilters }) => {
  const filteredVacancies = useMemo(
    () =>
      items.filter((item) => {
        const tags = [
          item.role,
          item.level,
          ...(item.languages || []),
          ...(item.tools || []),
        ];
        return filters.every((filter) => tags.includes(filter));
      }),
    [filters, items]
  );
  const finalVacancies = filters.length > 0 ? filteredVacancies : items;

  return (
    <div className='container'>
      {finalVacancies.map((item) => {
        const tags = [
          item.role,
          item.level,
          ...(item.languages ?? []),
          ...(item.tools ?? []),
        ];

        return (
          <Vacancy
            {...item}
            key={item.id}
            isNew={item.new}
            handleFilters={handleFilters}
            tags={tags}
          />
        );
      })}
    </div>
  );
};

export default Vacancies;
