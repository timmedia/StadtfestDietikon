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
import { VideoComponent } from './video/video.component';
import { GuestbookComponent } from './guestbook/guestbook.component';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    InputComponent,
    LoaderComponent,
    HelpComponent,
    MapComponent,
    VideoComponent,
    GuestbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    InputService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
