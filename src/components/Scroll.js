import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflow: 'scroll',
        borderTop: '3px solid black',
        borderBottom: '3px solid black',
        height: '500px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
