/**

subscribe
----0-------0---------0----->

subscribe
----0-------0---------0----->

subscribe
----0-------0---------0----->

subscribe
----0-------0---------0----->

Subject

subscribe
subscribe
subscribe
----0-------0---------0----->

 */
 
import {Subject, BehaviorSubject} from 'rxjs';

const helloSubject: Subject<string> = new Subject();

helloSubject.next('hello');

// helloSubject.error(new Error('something happened'));
// helloSubject.complete()

helloSubject.subscribe((msg: string) => {
	console.log(msg);
});

helloSubject.next('hello1');
helloSubject.next('hello2');

helloSubject.subscribe((msg: string) => {
	console.log(msg);
});

helloSubject.next('hello3');