import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

const App = () => {
  //
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const handleClipboardColor = (hexColor) => {
    setColor(hexColor);
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder='#f15025'
            className={error ? 'error' : null}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          const { rgb, weight } = color;
          const [r, g, b] = [rgb[0], rgb[1], rgb[2]];
          return (
            <SingleColor
              r={r}
              g={g}
              b={b}
              key={index}
              index={index}
              weight={weight}
              onClick={handleClipboardColor}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
