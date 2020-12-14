import { Component } from '@angular/core';

@Component({
  selector: 'app-brother',
  template: `
    <h1>Brother {{sayHello()}}</h1>
  `,
})
export class BrotherComponent {
  sayHello() {
    console.log('cd: BrotherComponent');
  }
}
