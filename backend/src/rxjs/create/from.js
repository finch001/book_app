const Rx = require('rxjs/Rx');
const arraySource = Rx.Observable.from([1, 2, 3, 4, 5, 6]);

const promiseSource = Rx.Observable.from(new Promise((resolve, reject) => resolve('Hello world')));

const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');

const mapSource = Rx.Observable.from(map);

const subscribe1 = print(arraySource);
const subscribe2 = print(promiseSource);
const subscribe3 = print(mapSource);

function print(observable) {
  return observable.subscribe(val => console.log(val));
}