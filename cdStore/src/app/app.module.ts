import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListcdComponent } from './list-cd/list-cd.component';
import { CdsService } from './cds.service';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewCDComponent } from './new-cd/new-cd.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    HeaderComponent,
    ListcdComponent,
    HomeComponent,
    NewCDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
