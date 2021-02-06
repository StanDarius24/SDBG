import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AboutusComponent} from './component/aboutus/aboutus.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {OferteComponent} from "./component/oferte/oferte.component";
import {AddofferComponent} from "./component/addoffer/addoffer.component";

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'oferte', component: OferteComponent},
  { path: 'addoffer', component: AddofferComponent},
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
