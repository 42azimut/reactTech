const array = [1, 2, 3, 4, 5];

// const nextArrayBad = array;  //복사가 아니고 같은 배열을 **가리킴***!
// nextArrayBad[0] = 100;
// console.log(nextArrayBad[0]); // 100
// console.log(nextArrayBad[0] === array[0]); //true

console.log('====불변성 유지 복사 방법=====');
const nextArrayGood = [...array]; //배열 내부 모두 **복사**
console.log(nextArrayGood);
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); //false
console.log(array);
console.log(nextArrayGood);

const object = {
  foo: 'bar',
  value: 1,
};

//const nextObjectBad = object; // 같음 오브젝트를 가리킴! (복사가 아님)
//nextObjectBad.value = nextObjectBad.value + 1; //
//console.log(object === nextObjectBad); // true
console.log('====불변성 유지 복사 방법=====');
const nextObjectGood = {
  ...object,
  value: object.value + 1,
};
console.log(nextObjectGood);
console.log(nextObjectGood.value + 1);
console.log(object);
