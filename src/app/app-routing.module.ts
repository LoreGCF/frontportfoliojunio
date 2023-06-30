import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPersonaComponent } from './components/Banner/actualizar-persona/actualizar-persona.component';
import { NuevaPersonaComponent } from './components/Banner/nueva-persona/nueva-persona.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    
  },
  {
    path:'admin',
    component:DashboardComponent,
   
    canActivate:[AdminGuard],

    children:[
      {
        path:'actualizar-persona',
        component:ActualizarPersonaComponent
      },
      {
        path: 'nueva-persona',
        component:NuevaPersonaComponent
      }


    ]

  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] }   
   )],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] }   
  )],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
*/