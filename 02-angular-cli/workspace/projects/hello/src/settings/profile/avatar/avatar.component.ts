import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shaam-avatar',
  template: `
    <div class="shaam-avatar">
      <p>avatar image</p>
    </div>

  `,
  styleUrls: [
    'avatar.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AvatarComponent {

}
