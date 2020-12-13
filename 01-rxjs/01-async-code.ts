

// -----0-|---------------->
setTimeout(() => {
	console.log('hello world');
}, 1000);

// ----0-----0-----0-----0----0->
setInterval(() => {
	console.log('hello world every second');
}, 1000)

/**


// i did not deal well with the async code
async(function() {
	async1(function() {
		async2(function() {
			
		})
	})
})

await async();
await async1();
await async2();

 */
 

/* 

questions:

1. how many times our callback is called
2. is the async code closing
3. can i have an error
4. do have any data in the callback

*/