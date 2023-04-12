import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ r, g, b, index, weight, onClick }) => {
  //
  const [alert, setAlert] = useState(false);

  const hexColor = rgbToHex(r, g, b);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);

  const handleClick = () => {
    // onClick(hexColor);  <- set the input color to selected color
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `${hexColor}` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
