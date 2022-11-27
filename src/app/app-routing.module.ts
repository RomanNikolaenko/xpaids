import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'confirmed',
    loadChildren: () => import('./confirmed/confirmed.module').then((m) => m.ConfirmedModule),
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then((m) => m.VerifyModule),
  },
  {
    path: 'recovery',
    loadChildren: () => import('./recovery/recovery.module').then((m) => m.RecoveryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
