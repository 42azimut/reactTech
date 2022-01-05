import React from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <form action="" className="TodoInsert">
      <input type="text" placeholder="할일 입력하세요!" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
