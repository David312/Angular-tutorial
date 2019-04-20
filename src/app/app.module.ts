import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from '@app/app.component';

import { InMemoryDataService }  from '@app/services/in-memory-data/in-memory-data.service';

import { HeroesComponent } from '@app/components/heroes/heroes.component';
import { HeroDetailsComponent } from '@app/components/hero-details/hero-details.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
			BrowserModule,
			FormsModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule,

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
