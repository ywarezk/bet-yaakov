import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Father {{sayHello()}}</h1>

    <app-child></app-child>

    <app-brother></app-brother>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  sayHello() {
    console.log('cd: AppComponent');
  }

}
