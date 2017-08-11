/**
 * Created by finch on 8/14/17.
 */
const Rx = require('rxjs/Rx');

const sourceone = Rx.Observable.of(1, 2, 3, 4);
const sourcetwo = Rx.Observable.of(5, 6, 7, 8);

const source = sourceone.concat(sourcetwo);

// const subscribe = source.subscribe(value => {
//   console.log(`value ${value}`);
// })

const mergeSource = sourceone.merge(sourcetwo);

// const subscribe1 = mergeSource.subscribe(value => {
//   console.log(`mergevalue ${value}`);
// })

const delaySource = sourceone.delay(3000);
const delayConcat = delaySource.concat(sourcetwo);

const subscribe2 = delayConcat.subscribe(value => {
  console.log(`delayValue ` + value);
})