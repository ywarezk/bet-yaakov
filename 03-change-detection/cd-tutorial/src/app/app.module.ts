import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CdExampleComponent } from './02-cd-example/cd-example.component';
// import { ChildComponent } from './03-order-and-who/child.component';
// import { BrotherComponent } from './03-order-and-who/brother.component';
// import { GrandComponent } from './03-order-and-who/grand.component';

import { ChildComponent } from './06-on-push/child.component';
import { BrotherComponent } from './06-on-push/brother.component';
import { GrandComponent } from './06-on-push/grand.component';

@NgModule({
  declarations: [
    AppComponent,
    CdExampleComponent,
    ChildComponent,
    BrotherComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
