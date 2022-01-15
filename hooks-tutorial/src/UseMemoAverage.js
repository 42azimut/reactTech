import React, { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중 ..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemoAverage = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // 리스트 배열 내용이 변경될때만 gerAverage 함수가 호출!!!
  const memoAvg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값: {memoAvg}</div>
    </div>
  );
};

export default UseMemoAverage;
