import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

// onInsert props로 받음 app.js 에서...
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value 값 초기화
      // submit 이벤트는 브라우저 새로고침 발생함
      // 이를 방지 하기 위해 preventDefault() 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form action="" className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일 입력하세요!"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
