const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];
console.log(nextTodos);

// nextTodos[0].checked = false;
// console.log(todos[0] === nextTodos[0]); //true  같은 객체를 가리킴:: true

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};
console.log(todos[0]);
console.log(nextTodos[0]);
console.log(todos[0] === nextTodos[0]);
