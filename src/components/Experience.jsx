import React from 'react';
import ExpCard from './ExpCard.jsx';

export default function Experience({ experiences }) {
  return (
    <div>
      {experiences.map((exp) => <ExpCard exp={exp} key={exp.title} />)}
    </div>
  );
}
