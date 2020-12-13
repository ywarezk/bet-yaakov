/**


---0----0---0---X------------>
---0----0---0---0-|----------->

---0----0---0---|------------>

 */
 
import {interval, Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

const counter: Observable<number> = interval().pipe(
	catchError((_err) => {
		of(-1);
	})
);


counter.subscribe(
	(num: number) => {
		console.log(num);
	}, 
	(err: Error) => {
		
	},
	() => {
		
	}
)