import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shaam-login',
  template: `
    <form>
      <label>
        email
      </label>
      <input type="email" name="email" />
      <label>
        password
      </label>
      <input type="password" name="password" />
    </form>
  `,
})
export class LoginComponent {
}
