/**

closing observable

---0---0---0---|------>

---0---0---0---X------>

---0---0---0---0---0--->

 */

import { Observable, Subscription } from "rxjs";

 
const intervalObservable: Observable<string> = new Observable((observer) => {

	let counter = 0;

	setInterval(() => {
		observer.next('hello');
		counter++;
		
		if (counter > 3) {
			// observer.complete();	
			// observer.error(new Error('something happened'));
		}
	}, 1000);

});

const sub: Subscription = intervalObservable.subscribe((msg: string) => {
	console.log(msg);
});

sub.unsubscribe();