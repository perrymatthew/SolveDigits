import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SolveComponent } from './pages/solve/solve.component';

const routes: Routes = [
  {
    path: '',
    component: SolveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
