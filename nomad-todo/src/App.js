import { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo + '.com', ...currentArray]);
    console.log(toDos);
    //console.log(toDo);
    setToDo('');
    //console.log(toDos);
  };

  const toDoList = toDos.map((toDo, id) => <li key={id}>{toDo}</li>);

  return (
    <div>
      <h1>My Todo List for nomad({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할일 입력하세요"
          value={toDo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <p>{toDo}</p>
      <ul>{toDoList}</ul>
    </div>
  );
}

export default App;
