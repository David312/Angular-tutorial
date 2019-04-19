import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';

import { HeroesComponent } from '@app/components/heroes/heroes.component';
import { HeroDetailsComponent } from '@app/components/hero-details/hero-details.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
  ],
  imports: [
			BrowserModule,
			FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
