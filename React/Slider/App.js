import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import data from './data';

const App = () => {
  //
  const [reviews, setReviews] = useState(data);
  const [number, setNumber] = useState(0);

  const handlePrevClick = () => {
    if (number === 0) {
      setNumber(3);
    } else {
      setNumber(number - 1);
    }
  };

  const handleNextClick = () => {
    if (number === 3) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        <article>
          <img className='person-img' src={reviews[number].image} />
          <h4>{reviews[number].name}</h4>
          <p className='title'>{reviews[number].title}</p>
          <p className='text'>{reviews[number].quote}</p>
          <FaQuoteRight className='icon' />
        </article>
        <button className='prev' onClick={handlePrevClick}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={handleNextClick}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
