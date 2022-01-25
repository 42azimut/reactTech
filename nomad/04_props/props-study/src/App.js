import { useState, memo } from 'react';
import './App.css';
import Btn from './Btn';

const MemorizedBtn = memo(Btn);

function App() {
  const [value, setValue] = useState('Save Changes');
  const changeValue = () => setValue('Revert Changes');
  return (
    <div className="App">
      <h1>Props Tutorial</h1>

      <MemorizedBtn text={value} changeValue={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}

export default App;
