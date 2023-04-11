import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-input',
    loadComponent: () =>
      import(
        './standalone-components/custom-input/custom-input.component'
      ).then((comp) => comp.CustomInputComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
