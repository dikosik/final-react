import React from 'react';

const Vacancy = ({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  featured,
  isNew,
  handleFilters,
  tags,
}) => (
  <div className='job-card'>
    <div className='logo'>
      <img src={process.env.PUBLIC_URL + logo} alt={company} />
    </div>
    <div className='card-details'>
      <h2 className='company'>{company}</h2>

      {/* check to see if job listing is featured or new */}
      {isNew && <h2 className='new-tag'>New!</h2>}
      {featured && <h2 className='feature-tag'>Featured</h2>}
      {featured && <div className='feature-highlight'></div>}

      <h1 className='position'>{position}</h1>
      <p className='description'>
        {postedAt} <span>&#8226;</span> {contract} <span>&#8226;</span>{' '}
        {location}
      </p>
    </div>

    <div className='card-tags'>
      {tags.map((tag, index) => (
        <button
          onClick={() => handleFilters(tag)}
          className='job-tag'
          key={index}
        >
          {' '}
          {tag}{' '}
        </button>
      ))}
    </div>
  </div>
);

export default Vacancy;
