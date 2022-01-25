import React, { useState } from 'react';

const InsideKmMiles = () => {
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
        <label htmlFor="km">Km</label>
        <input
          id="km"
          type="number"
          placeholder="km"
          value={inverted ? amounts * 60 : amounts}
          onChange={onChangeMinutes}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          id="miles"
          type="number"
          placeholder="Miles"
          value={inverted ? amounts : Math.round(amounts * 1.6)}
          onChange={onChangeMinutes}
          disabled={!inverted}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFlip}>inverted</button>
    </div>
  );
};

export default InsideKmMiles;
