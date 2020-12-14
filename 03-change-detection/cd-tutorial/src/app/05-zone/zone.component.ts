import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  template: ``,
})
export class NameComponent implements OnInit {
  constructor(
    private _zone: NgZone
  ) { }

  ngOnInit(): void {

    // good for loading spinner
    this._zone.onStable.subscribe(() => {
      // this will run when there is no server requests that havent returned
      // all the timer returned


    });

    // force code to be called from angular room
    this._zone.run(() => {
      // this code will run from angular room
    });

    // run not in angular room
    this._zone.runOutsideAngular(() => {

    })

  }
}
