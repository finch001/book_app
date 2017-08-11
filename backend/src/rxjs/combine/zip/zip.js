const Rx = require('rxjs/Rx');

// 在所有的observables发出后，将它们的值作为数组发出
// 只要有一个的Observable结束 则整个流都结束
const sourceOne = Rx.Observable.of('Hello');
const sourceTwo = Rx.Observable.of('World');
const sourceThree = Rx.Observable.of('GoodBye');

// const example = Rx.Observable.zip(sourceOne, sourceTwo.delay(1000), sourceThree.delay(2000));

// const subscribe = example.subscribe(val => console.log(val));

const interval = Rx.Observable.interval(1000);

const example1 = Rx.Observable.zip(interval, interval.take(2));

const subscribe1 = example1.subscribe(val => console.log(val));