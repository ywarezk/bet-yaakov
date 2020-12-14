/**

code that is not universal

- code that runs on the browser
- but will not run in Node.js

 */

if (typeof location !== 'undefined') {
  console.log(location.hostname);
} else {
  console.log('we are in nodejs and we do not have the Location api');
}

