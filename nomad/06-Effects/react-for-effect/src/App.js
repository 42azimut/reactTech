import { useState, useEffect } from 'react';

function Hello() {
  const destroyedFn = () => {
    console.log('Destoryed!');
  };
  const effectFn = () => {
    console.log('Created :)');
    return destroyedFn;
  };
  useEffect(effectFn, []);
  return <h1>Hello Fn!!</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  const [showing, setShowing] = useState(false);

  const onClick2 = () => setShowing((prev) => !prev);
  // console.log('I run All the Time useEffect');
  // useEffect(콜백함수, 디펜던시 배열)

  useEffect(() => {
    console.log('I run only first once');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('In conditional useEffect : Search For ', keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' Change.");
  }, [counter]);

  useEffect(() => {
    console.log('I run when keyword or counter Change!');
  }, [keyword, counter]);

  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? 'Hide' : 'Show'}</button>
      <hr />
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
