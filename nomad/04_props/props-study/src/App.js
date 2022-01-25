import './App.css';
import Btn from './Btn';

function App() {
  return (
    <div className="App">
      <h1>Props Tutorial</h1>

      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" big={false} />
    </div>
  );
}

export default App;
