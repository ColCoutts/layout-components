import React from 'react';

export default function Header() {
  const header = 'React Stuff!';

  return (
    <header>
      <img id="profile-photo" src="https://i.pinimg.com/736x/a8/d4/59/a8d459c60fd072fee5cf58cba92d8920.jpg"/>
      <h1>{header}</h1>
    </header>
  );
}
