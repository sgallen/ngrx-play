import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

import {
    toDoReducer,
} from './todo';

const reducers = {
    todo: toDoReducer,
};

const store = StoreModule.provideStore(reducers);


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    store,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    TodoModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
