import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InputAnimationComponent } from './input-animation/input-animation.component';
import { LoginAnimationComponent } from './login-animation/login-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputAnimationComponent,
    LoginAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
