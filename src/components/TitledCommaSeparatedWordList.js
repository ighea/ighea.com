import React from 'react';

import './TitledCommaSeparatedWordList.css';

function TitledCommaSeparatedWordList(props) {
  return (
    <div className="TitledCommaSeparatedWordList">
      <h3>{props.title}</h3>
      <p>
      {props.items.map((item, index) => (
        <span key={index} >{item}</span>
      ))}
      </p>
    </div>
  );
}

export default TitledCommaSeparatedWordList;