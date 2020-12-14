import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-brother',
  template: `
    <h1>Brother {{sayHello()}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrotherComponent {
  sayHello() {
    console.log('cd: BrotherComponent');
  }
}
