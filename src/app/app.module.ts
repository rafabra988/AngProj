import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { RoutingModule } from './feed/app.routing.module';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    FeedModule,
    RoutingModule    
    
  ],
  //prover um recurso
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
