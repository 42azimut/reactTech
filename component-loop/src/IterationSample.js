import React from 'react';

const IterationSample = () => {
  const nums = [1, 2, 3, 4, 5];
  const result = nums.map((num) => num * num);
  console.log(result);

  const names = ['눈사람', '얼음', '눈', '바람', 'ice'];
  const nameList = names.map((name, index) => (
    <li key={index}>
      {index} : {name}
    </li>
  ));
  return <ul>{nameList}</ul>;
};

export default IterationSample;
