import React, { useState } from 'react';

const NomadUseState = () => {
  const [amounts, setAmounts] = useState('');
  const [inverted, setInverted] = useState(false);

  const onChangeMinutes = (e) => {
    setAmounts(e.target.value);
  };

  const handleReset = () => setAmounts('');
  const handleFlip = () => {
    handleReset();
    setInverted((current) => !current); // (!flipped)
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          type="number"
          placeholder="Minutes"
          value={inverted ? amounts * 60 : amounts}
          onChange={onChangeMinutes}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          type="number"
          placeholder="Hours"
          value={inverted ? amounts : Math.round(amounts / 60)}
          onChange={onChangeMinutes}
          disabled={!inverted}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFlip}>inverted</button>
    </div>
  );
};

export default NomadUseState;
