import React from 'react';

export default function About({ about }) {
  return (
    <div id="about">
      {about.map((p) => <p>{p}</p>)}
    </div>
  );
}
