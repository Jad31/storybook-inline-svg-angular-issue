import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLayoutComponent } from './svg-layout/svg-layout.component';
import {SvgPartModule} from '@workspace/svg-part'

@NgModule({
  imports: [CommonModule, SvgPartModule],
  declarations: [
    SvgLayoutComponent
  ],
  exports: [SvgLayoutComponent]
})
export class SvgLayoutModule {}
