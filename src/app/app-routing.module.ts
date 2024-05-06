import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'details/:id',
    component: CompanyDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'directors/:id',
    component: DirectorsComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
