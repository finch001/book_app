const Rx = require('rxjs/Rx');

const timer = Rx.Observable.interval(1000);

const result = timer.startWith(-3, -2, -1);

result.subscribe(value => {
  console.log(`value ${value}`);
})