import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';  /* slide over menu */
import { MatIconModule } from '@angular/material/icon';  /* slide over menu */
import { MatSidenavModule } from '@angular/material/sidenav';  /* slide over menu */
import { MatToolbarModule } from '@angular/material/toolbar';

//import { MainCComponent } from './main-c/main-c.component'; 


@NgModule({
  declarations: [
    AppComponent
   // MainCComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, /* slide over menu button */
    MatIconModule,  /* slide over menu icon */
    MatSidenavModule,  /* slide over menu sidenave */
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
