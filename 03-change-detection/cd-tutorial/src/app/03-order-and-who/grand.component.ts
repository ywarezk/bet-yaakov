import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <h1>Grand {{sayHello()}}</h1>
  `,
})
export class GrandComponent implements OnInit {
  sayHello() {
    console.log('cd: GrandComponent');
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer is running in Grandcomponent');
    }, 1000);
  }
}
