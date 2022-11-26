import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedComponent } from './confirmed.component';

const routes: Routes = [{ path: '', component: ConfirmedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedRoutingModule {}
