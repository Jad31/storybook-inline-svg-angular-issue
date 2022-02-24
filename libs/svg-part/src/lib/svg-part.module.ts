import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgPartComponent } from './svg-part/svg-part.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SvgPartComponent
  ],
  exports: [SvgPartComponent]
})
export class SvgPartModule {}
