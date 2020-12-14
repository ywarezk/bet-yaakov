import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child {{sayHello()}}</h1>



    <app-grand [counter]="parentCounter$ | async"></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  parentCounter$ = new BehaviorSubject(0);

  sayHello() {
    console.log('cd: ChildComponent');
  }

  ngOnInit() {

    //
    /*
    setTimeout(() => {
      console.log('timer is running in')
      this.parentCounter$.next(this.parentCounter$.value + 1);
    }, 1000);
    */
  }
}
