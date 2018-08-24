import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { InputComponent } from './input/input.component';
import { InputService } from './input.service';
import { LoaderComponent } from './loader/loader.component';
import { HelpComponent } from './help/help.component';
import { PageService } from './page.service';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    InputComponent,
    LoaderComponent,
    HelpComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    InputService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
