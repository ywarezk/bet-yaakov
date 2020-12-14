import 'zone.js';

console.log(Zone.current.name);


const angularRoom = Zone.current.fork({
  name: 'angular',
  onHasTask: () => {
    console.log('some stuff is exiting the room');
  }
});

angularRoom.run(() => {
  setTimeout(() => {
    console.log(Zone.current.name);
    console.log('timer is now running');
  }, 1000)
})


// const oldSetTimeout = window.setTimeout

// window.setTimeout = () => {
//   // ... some zone and room logic
//   oldSetTimeout()
// }
