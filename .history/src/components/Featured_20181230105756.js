import React from 'react';

const Featured = ({match}) => {
  const {name} = match.params;
  return (
    <div className="main-content">
      <h2>Featured: {name}</h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong></strong>!</p>
    </div>
  );
}

export default Featured;