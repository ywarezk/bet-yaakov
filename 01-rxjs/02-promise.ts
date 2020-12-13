/**

--------0--|------------->

--------X---------------->

 */
 
 
// Promise

// 1. pending
// 2. pending ---> resolved / rejected

const timerPromise: Promise<number> = new Promise((resolve, reject) => {
	console.log('how many times the promise async function is called?');
	setTimeout(() => {
		// resolve(4);	
		// the second resolve will not be sent to the listeners
		// resolve(10);
		reject(new Error('something happened'))
	}, 1000)
	
});

timerPromise.then(
	(num: number) => {
		console.log(num);
	},
	(err: Error) => {
		console.log(err.message)
	}
);

timerPromise.then((num: number) => {
	console.log(num);
})
