import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule,HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateHotelComponent } from './home/create-hotel/create-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    CreateHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
