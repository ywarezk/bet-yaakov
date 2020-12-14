import { ChangeDetectionStrategy, Component, OnInit, ComponentFactory, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-name',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {
  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }
}
