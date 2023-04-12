import React, { useState } from 'react';

import data from './data';
import List from './List';

const App = () => {
  //
  const [people, setPeople] = useState(data);

  const numOfBirthdays = people.length;

  return (
    <main>
      <section className='container'>
        <h3>{numOfBirthdays} birthdays today</h3>
        {people.map((person) => (
          <List
            key={person.id}
            photo={person.image}
            name={person.name}
            age={person.age}
            id={person.id}
          />
        ))}
        <button type='button' onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
