import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehicleManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
