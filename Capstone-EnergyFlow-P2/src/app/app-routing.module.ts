import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrownCComponent } from "./crown/crown-c/crown-c.component";
import { HeartCComponent } from './heart/heart-c/heart-c.component';
import { InfoCComponent } from './info/info-c/info-c.component';
import { MainCComponent } from './main/main-c/main-c.component';
import { RootCComponent } from './root/root-c/root-c.component';
import { SacralCComponent } from './sacral/sacral-c/sacral-c.component';
import { SolarCComponent } from './solar/solar-c/solar-c.component';
import { ThirdeyeCComponent } from './thirdeye/thirdeye-c/thirdeye-c.component';
import { ThroatCComponent } from './throat/throat-c/throat-c.component';
import { WelcomeCComponent } from './welcome/welcome-c/welcome-c.component';



const routes: Routes = [

  { path: 'welcome', component: WelcomeCComponent },  
  { path: 'crown', component: CrownCComponent },
  { path: 'heart', component: HeartCComponent },
  { path: 'info', component: InfoCComponent },
  { path: 'main', component: MainCComponent },
  { path: 'root', component: RootCComponent },
  { path: 'sacral', component: SacralCComponent },
  { path: 'solar', component: SolarCComponent },
  { path: 'thirdeye', component: ThirdeyeCComponent },
  { path: 'throat', component: ThroatCComponent },
  {path: '', redirectTo: '', pathMatch: 'full' }



  /* 
  { path: 'heart',  loadChildren: () => import('./heart/heart.module').then(m => m.HeartModule) },
  { path: 'info',  loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'root',  loadChildren: () => import('./root/root.module').then(m => m.RootModule) },
  { path: 'throat',  loadChildren: () => import('./throat/throat.module').then(m => m.ThroatModule) },
  { path: 'thirdeye',  loadChildren: () => import('./thirdeye/thirdeye.module').then(m => m.ThirdeyeModule) },
  { path: 'solar',  loadChildren: () => import('./solar/solar.module').then(m => m.SolarModule) },
  { path: 'sacral',  loadChildren: () => import('./sacral/sacral.module').then(m => m.SacralModule) },
*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
