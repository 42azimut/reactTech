const { createStore } = require('redux');

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 함수 및 타입
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 액션 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지(깊은 복사)
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//스토어 만들기
const store = createStore(reducer);
// 랜더 함수 만들기
const render = () => {
  const state = store.getState(); //현재 상태
  //토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
};

render(); //랜더실행

store.subscribe(render); //구독하기

//액션 발생시키기
const test = (divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
});
btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
