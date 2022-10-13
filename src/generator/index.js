function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

// with this we can use "next"
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['a', 'b', 'c', 'd', 'e']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
