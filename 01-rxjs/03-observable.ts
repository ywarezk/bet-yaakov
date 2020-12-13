/**

Promise not suitable

----0----0----0---0------>

----0-|-------------------->

 */



 
// 1. callback
// 2. Events

// Observable - stage1

// RXJS

import { Observable } from "rxjs";


// Promise VS Observable

// promise can be resolved once
// observable can call next how many times you like

const intervalObservable: Observable<number> = new Observable((observer) => {
	
	
	setInterval(() => {
		observer.next(4);
		// you can call next infinite amount of times
		observer.next(10);
	}, 1000);
	
})

intervalObservable.subscribe((num: number) => {
	console.log(num);
});


