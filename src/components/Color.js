import React from 'react';


export default function Color() {
  const color = {
    name: 'Red',
    hex: 'FF6347',
    rgb: '255,99,71'
  };

  const divStyle = {
    color: 'blue'
  };

  const dtStyle = {
    color: 'green'
  }
  
  return (
    <div style={divStyle}>
      <dl>
        <dt style={dtStyle}>Name</dt>
        <dd>{color.name}</dd>

        <dt>Hex</dt>
        <dd>{color.hex}</dd>

        <dt>RGB</dt>
        <dd>{color.rgb}</dd>
      </dl>
    </div>
  );
}
