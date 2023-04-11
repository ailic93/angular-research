import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomButtonComponent } from './standalone-components/custom-button/custom-button.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,

    //* Components
    CustomButtonComponent
  ],
  exports: [
    CustomButtonComponent
  ]
})
export class FeaturesModule { }
