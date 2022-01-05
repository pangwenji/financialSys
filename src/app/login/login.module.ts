import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
  ]
})
export class LoginModule { }
