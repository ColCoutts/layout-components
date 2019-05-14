import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Jeff',
    age: 'Super old',
    weight: 'actaully not bad shape'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  );
}
