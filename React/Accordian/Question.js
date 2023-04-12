import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info, id }) => {
  //
  const [isOpen, setIsOpen] = useState(false);

  const hanldeToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={hanldeToggle} className='btn'>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
