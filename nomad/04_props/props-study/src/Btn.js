import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ text, fontSize = 16 }) => {
  console.log(text, 'was render');
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        fontSize: 20,
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
//const MemorizedBtn = memo(Btn); App 에서 작성해야함!
export default Btn;
