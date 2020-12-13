/**

-----0----0----0----0---------->

-----0----0----0----0---------->

-----0----0----0----0---------->

 */

import { Observable } from "rxjs";


// Promise VS Observable

// promise one shouter for many listeners
// observable one shout for one listener
 
const intervalObservable: Observable<string> = new Observable((observer) => {
	console.log('how many times this function runs?');

	setInterval(() => {
		observer.next('hello');
	}, 1000);

});

intervalObservable.subscribe((msg: string) => {
	console.log(msg);
});

intervalObservable.subscribe((msg: string) => {
	console.log(msg);
})

intervalObservable.subscribe((msg: string) => {
	console.log(msg);
})