const Rx =  require('rxjs/Rx');

const hello = Rx.Observable.create(function(observer){
  observer.next('Hello');
  observer.next('World');
});

const subscribe = hello.subscribe(val => console.log(val));