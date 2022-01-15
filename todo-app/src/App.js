import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 리액트로 만들어 보기',
      checked: false,
    },
  ]);

  //고유값으로 사용될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(todos.length + 1);

  // onInsert 는 props 로 TodoInsert 로 전달!
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current, // useRef에서 변수.current 접근 사용!
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId  1식더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
