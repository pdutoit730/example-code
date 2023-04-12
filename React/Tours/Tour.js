import React, { useState } from 'react';

const Tour = ({ image, name, info, price, id, onDelete }) => {
  //
  const [readMore, setReadMore] = useState(false);

  const removeItem = (tourId) => {
    onDelete(tourId);
  };

  const handleToggleButton = () => {
    setReadMore((prevValue) => !prevValue);
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type='button' onClick={handleToggleButton}>
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </p>

        <button
          className='delete-btn'
          type='button'
          onClick={() => removeItem(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

/* id: 'rec6d6T3q5EBIdCfD', 
name: 'Best of Paris in 7 Days Tour', 
info: 'Paris is synonymous with the finest things that cu…e vivre. Join us for the Best of Paris in 7 Days!', 
image: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg', 
price: '1,995' */
