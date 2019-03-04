function* test() {
  let a = 1 + 2;
  yield a;
  yield 4;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }

// function* foo () {
//   let a = 1;
//   setTimeout(() => {
//     yield () => {console.log()};
//   }, 200)
// }

// var ac = foo()
// ac.next()