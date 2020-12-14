import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-grand',
  template: `
    <h1>Grand {{sayHello()}} <!--{{counter$ | async}} --> {{counter}}</h1>
    <h1> {{counterCd}} </h1>
    <button (click)="doSomething()">
      click me
    </button>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent implements OnInit {
  // input change will trigger cd
  @Input()
  counter = 0;

  // counter = 0; // will not update

  // counter$ : BehaviorSubject<number> = new BehaviorSubject(0)

  counterCd = 0;

  sayHello() {
    console.log('cd: GrandComponent');
  }

  constructor(private _cd: ChangeDetectorRef) {

  }

  ngOnInit() {

    // timers do not run change detection with on push
    // subscribe - observable / promise do not trigger cd
    /*
    setTimeout(() => {
      this.counter++;
      console.log('timer is running in Grandcomponent');

      this.counter$.subscribe(() => {
        this.counter++;
      })

      this.counter$.next(1);
    }, 1000);
    */


    // async pipe will trigger cd
    // setTimeout(() => {
    //   console.log('timer is running in Grandcomponent');
    //   this.counter$.next(1);
    // }, 1000)


    setTimeout(() => {
      console.log('timer is running in Grandcomponent');
      this.counterCd++;
      this._cd.detectChanges();
      // this._cd.markForCheck();
    }, 1000)
  }

  // events will trigger cd
  doSomething() {

  }
}
