/**
  Angular provides us tools to help us write universal code:

  Location
  Document - document - @Inject(DOCUMENT)

 */

import { Location, DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <h1 #header id="hello">
      hello
    </h1>
  `,
})
export class NameComponent implements OnInit, AfterViewInit {
  // {nativeElement: Dom element of h1}
  @ViewChild('header')
  header: ElementRef<HTMLHeadingElement>;

  constructor(
    private _location: Location,
    @Inject(DOCUMENT) private _document,
    @Inject(PLATFORM_ID) private _platform,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._platform)) {
      // only the browser will enter this if
    }

    if (isPlatformServer(this._platform)) {
      // only node will enter this if
    }

  }

  ngAfterViewInit() {
    // universal code
    this._renderer.addClass(this.header.nativeElement, 'hello');

    // will run only in browser
    // not universal code
    document.getElementById('hello').classList.add('hello')
  }
}
