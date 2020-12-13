/**

Operators

1. creating 

function(config, arg) {
	return new Observalbe(...)
}

2. modifying observable

function(config, arg2) {
	
	return function(oldObservable) {
		return new Observable(...)
	}
	
}

 */
 
import { interval, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';


// observable<number>  
// ---0-----1-----2-----3---->
const counterObservable: Observable<number> = interval(1000);


// ---0-------------1----------2----------3---->
// ---0------------------------2--------------->
// ---hello0----------------hello2-------------->
counterObservable.pipe(
	filter((counter: number) => {
		return counter % 2 === 0;
	}),
	map((counter: number) => {
		return `hello${counter}`;	
	}),
	tap((msg: string) => {
		console.log(msg);
	})
)