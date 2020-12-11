# Angular Change Detection

## Lesson Plan

- About angular change detection
- order of change detection
- Zone.js
- NgZone
- OnPush
- ChangeDetectorRef

## EX.

Our goal in this EX. is to practice all the elements that cause a change detection on Push to trigger

- Create a component that counts every second.  
`setInterval` will not work so we will use the `interval` operator and display it with the `async` pipe  
`async pipe will trigger change detection in OnPush`

- Create another component that counts.  
This time