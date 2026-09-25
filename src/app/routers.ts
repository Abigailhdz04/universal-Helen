import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.components';

export const routes =
[
      { path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'login', component: HomeComponent}
    ]