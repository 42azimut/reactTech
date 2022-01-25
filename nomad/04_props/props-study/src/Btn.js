import React from 'react';

const Btn = ({ text, changeValue }) => {
  console.log(text, 'was render');
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: 'tomato',
        fontSize: 20,
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
//const MemorizedBtn = memo(Btn); App 에서 작성해야함!
export default Btn;
