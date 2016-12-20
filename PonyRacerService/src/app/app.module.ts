import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { LogDirective } from './log.directive';
import { PoniesComponent } from './ponies/ponies.component';
import { PonyComponent } from './pony/pony.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    LogDirective,
    PoniesComponent,
    PonyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
