import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { VehicleManagementComponent } from '../vehicle-management/vehicle-management.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'Vehicle',
  component: VehicleManagementComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
