import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UseReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  console.log(state);
  const { name, nickname } = state;
  console.log(name, nickname);
  const onChange = (e) => {
    //console.log(dispatch(e.target));
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>이름: {name}</div>
        <div>닉네임: {nickname}</div>
      </div>
    </div>
  );
};

export default UseReducerInfo;
