import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListcdComponent } from './list-cd/list-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    HeaderComponent,
    ListcdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
