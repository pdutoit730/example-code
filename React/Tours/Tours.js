import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, onDelete }) => {
  //
  const removeItem = (tourId) => {
    onDelete(tourId);
  };

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              image={tour.image}
              name={tour.name}
              info={tour.info}
              price={tour.price}
              id={tour.id}
              onDelete={removeItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

// id: 'recIwxrvU9HfJR3B4',
// name: 'Best of Ireland in 14 Days Tour',
// info: "Rick Steves' Best of Ireland tour kicks off with t…eart. Join us for the Best of Ireland in 14 Days!",
// image: 'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
// price: '3,895'
