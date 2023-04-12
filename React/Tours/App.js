import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  //
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const deleteTour = (tourId) => {
    const updatedTours = tours.filter((tour) => tourId !== tour.id);
    setTours(updatedTours);
  };

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((tours) => {
        setTours(tours);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} onDelete={deleteTour} />
    </main>
  );
};

export default App;
