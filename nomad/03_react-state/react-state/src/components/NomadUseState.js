import React, { useState } from 'react';

const NomadUseState = () => {
  const [amounts, setAmounts] = useState('');
  const [flipped, setFlipped] = useState(false);

  const onChangeMinutes = (e) => {
    setAmounts(e.target.value);
  };

  const handleReset = () => setAmounts('');
  const handleFlip = () => {
    handleReset();
    setFlipped((current) => !current); // (!flipped)
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          type="number"
          placeholder="Minutes"
          value={flipped ? amounts * 60 : amounts}
          onChange={onChangeMinutes}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          type="number"
          placeholder="Hours"
          value={flipped ? amounts : Math.round(amounts / 60)}
          onChange={onChangeMinutes}
          disabled={!flipped}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFlip}>Flipped</button>
    </div>
  );
};

export default NomadUseState;
