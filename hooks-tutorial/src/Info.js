import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const 함수명1 = (e) => {
    setName(e.target.value);
  };

  const 함수명2 = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={함수명1} />
        <input type="text" value={nickname} onChange={함수명2} />
      </div>
      <div>
        <div>
          <b>이름</b>
          {name}
        </div>
        <div>
          <b>닉네임</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
