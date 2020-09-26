import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewgameComponent} from './newgame/newgame.component';

const routes: Routes = [
  {path:'mainpage' ,component:HomeComponent },
  {path:'newgamepage' ,component:NewgameComponent},
  {path:'**', component:HomeComponent},
  //by default,redirect to home component initially when there is no path 
  {path:'',redirectTo:'/mainpage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [HomeComponent,NewgameComponent]
