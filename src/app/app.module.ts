import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';



import { ObservableService } from './services/observable.service';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
//import { ParentComponent } from './components/parent/parent.component';
//import { ChildComponent } from './components/child/child.component';
import { ObservableUserService } from './services/observableUser.service';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';


// decorating and start using which are imported.
// pipe and comp declaration
// exrra module goes to imports.
// Service are going to provideres.
@NgModule({
  declarations: [
    AppComponent,
    //ParentComponent,
    //ChildComponent,
    TestObservableComponent,
    ObservableuserComponent,
    PostsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ObservableService,ObservableUserService], // service will be used in this prividers
  bootstrap: [AppComponent]
})
export class AppModule { }
