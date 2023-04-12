import React from 'react';

const List = (props) => {
  //
  return (
    <>
      <div className='person' key={props.id}>
        <img src={props.photo} alt={props.name} />
        <div>
          <h4>{props.name}</h4>
          <p>{props.age} years</p>
        </div>
      </div>
    </>
  );
};

export default List;
