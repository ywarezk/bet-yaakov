import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child {{sayHello()}}</h1>

    <app-grand></app-grand>
  `,
})
export class ChildComponent {
  sayHello() {
    console.log('cd: ChildComponent');
  }
}
