import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
