// 액션 타입 정으
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새 인풋값 등록
const TOGGLE = 'todos/TOGGLE'; //투두를 체크/체크 해제
const REMOVE = 'todos/REMOVE'; // 투두 제거

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; // insert가 호출 될때마다 1씩 더해짐!
// id 값은 생성 함수 호출 될때마다 1씩 더해짐! 투두 객체의 아이디 고유값!!
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux learngin fun!!',
      done: true,
    },
    {
      id: 2,
      text: '리액트 배워자! fun!!',
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
