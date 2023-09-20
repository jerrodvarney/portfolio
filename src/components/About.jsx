import React from 'react';

export default function About({ about }) {
  return (
    <div id="about">
      <span className="mobile-header">ABOUT</span>
      {about.map((p) => <p>{p}</p>)}
    </div>
  );
}
