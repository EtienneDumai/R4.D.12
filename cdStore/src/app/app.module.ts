import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListcdComponent } from './list-cd/list-cd.component';
import { CdsService } from './cds.service';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    HeaderComponent,
    ListcdComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
