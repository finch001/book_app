/**
 * Created by finch on 8/14/17.
 */
const Rx = require('rxjs/Rx');

const timer1 = Rx.Observable.timer(1000, 4000);
const timer2 = Rx.Observable.timer(2000, 4000);
const timer3 = Rx.Observable.timer(3000, 4000);

const combine = Rx.Observable.combineLatest(timer1, timer2, timer3);

const subscribe = combine.subscribe(latestValues => {
  const [one, two, three, four] = latestValues;

  console.log(
    `Timer One Latest: ${one}, 
     Timer Two Latest: ${two}, 
     Timer Three Latest: ${three},
     Timer Four Latest: ${four}`
  );
});



