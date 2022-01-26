import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log('I run All the Time useEffect');
  // useEffect(콜백함수, 디펜던시 배열)

  useEffect(() => {
    console.log('Call the API');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('Search For ', keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input
        type="text"
        value={keyword}
        placeholder="Search Here..."
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Plus</button>
    </div>
  );
}

export default App;
