import React, { Component, useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const [username, message] = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div>
      <h1>이벤트 핸들러 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명 입력"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onKeyPress}>확인</button>
    </div>
  );
};

export default EventPractice;
