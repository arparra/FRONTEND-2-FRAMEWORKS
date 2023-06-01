import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GAMEComponent } from './game/game.component';

const routes: Routes = [
  {path:'', component: GAMEComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
