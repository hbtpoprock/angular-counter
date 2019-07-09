import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAreaModule } from './inputarea/inputarea.module';
import { ResultModule } from './result/result.module';

@NgModule({
  imports: [BrowserModule, ResultModule, InputAreaModule, AppRoutingModule],
  declarations: [AppComponent],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
