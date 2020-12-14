import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssr-tutorial2';

  constructor(
    @Inject(PLATFORM_ID) private _platform
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this._platform)) {
      console.log(location.pathname);
    } else {
      console.log('node does not contain location');
    }

  }
}
