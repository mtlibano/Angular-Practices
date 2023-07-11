import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputAnimationComponent } from './input-animation/input-animation.component';
import { LoginAnimationComponent } from './login-animation/login-animation.component';

const routes: Routes = [
  { path: 'input-animation', component: InputAnimationComponent},
  { path: 'login-animation', component: LoginAnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
