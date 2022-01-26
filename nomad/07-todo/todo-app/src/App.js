import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return; //input 비어있으면 작동 안함!
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length}개)</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={toDo}
          placeholder="Write your Todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
