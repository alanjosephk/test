import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';

export const routes: Routes = [
 {path: '',component: LoginComponent, pathMatch: 'full'},
 {path: 'home',component: HomeComponent, pathMatch: 'full'},
 {path: 'bill',component: BillComponent, pathMatch: 'full'}
 


];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }