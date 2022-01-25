import React from 'react';

const Btn = ({ text, big }) => {
  console.log(text, big);
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        fontSize: big ? 20 : 16,
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
};

export default Btn;
