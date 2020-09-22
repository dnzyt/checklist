import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {LoginRoutingModule} from './login-routing.module';
import { StoreModule } from '@ngrx/store';

import * as fromLogin from './store';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    LoginRoutingModule
  ]
})
export class LoginModule { }
