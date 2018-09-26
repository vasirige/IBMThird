import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from  './components/child/child.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
