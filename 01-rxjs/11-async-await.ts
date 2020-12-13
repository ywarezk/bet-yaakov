/**

async await

------0-|------------>

 */
 
import axios from 'axios';
 
/**
 * @returns {Promise<number>}
 */
async function myAge() {
	// axios.get => Promise
	/**
	 * response = axios.get(...).then((res) => )
	 */
	 
	try {
		/*
		await Promise.all(
			[promise1, promise2]
		)
		*/
		const response = await axios.get('http://nztodo.herokuapp.com/api/tasks/?format=json');
		const timerPromiseResult = await timerPromise;	 
	} catch(err) {
		console.log(err.message);
	}
	
	
	
	
	return 35;
}

myAge().then((thrityFive) => {
	console.log(thrityFive);
})