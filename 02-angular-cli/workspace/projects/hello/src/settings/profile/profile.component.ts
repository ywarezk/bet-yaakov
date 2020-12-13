import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shaam-settings-profile',
  template: `
    <h1>
      Profile settings
    </h1>

    <p>
      this wont be red
    </p>

    <shaam-avatar></shaam-avatar>

    <router-outlet name="dialogs"></router-outlet>
  `,
})
export class ProfileComponent {

}
