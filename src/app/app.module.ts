import { NgModule, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RandomPasswordComponent } from './random-password/random-password.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RandomPasswordComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
