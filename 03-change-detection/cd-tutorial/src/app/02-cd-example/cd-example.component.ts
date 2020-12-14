import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-example',
  template: `
    <h1>
      CD Example {{counter}} {{ sayHello() }}
    </h1>
  `
})
export class CdExampleComponent implements OnInit {
  counter = 0;

  ngOnInit() {
    setTimeout(() => {
      console.log('timer is running');
    }, 1000)
  }

  sayHello() {
    console.log('cd: CdExampleComponent');
    // this.counter++;
    // return Math.random();
  }

}



