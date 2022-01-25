import { useState } from 'react';
import NomadUseState from './components/NomadUseState';
import InsideKmMiles from './components/InsideKmMiles';

function App() {
  const [index, setIndex] = useState('xx');
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div className="App">
      <h1 className="hi">Super Converter</h1>
      <select name="" value={index} onChange={onSelect}>
        <option value="xx">Select your Option</option>
        <option value="0">Minutes & Hours </option>
        <option value="1">KM & Miles </option>
      </select>
      <hr />
      {index === 'xx' ? 'Please select option' : null}
      {index === '0' ? <NomadUseState /> : null}
      {index === '1' ? <InsideKmMiles /> : null}
    </div>
  );
}

export default App;
