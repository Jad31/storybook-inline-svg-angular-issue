import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-svg-layout',
  templateUrl: './svg-layout.component.html',
  styleUrls: ['./svg-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgLayoutComponent {

  viewbox: any = {
    minx: 0,
    miny: 0,
    width: 400,
    height: 400
  }
  svgLogoRatio = 1;
  svgFillValueB ='#F92772';
  svgSPoint ={ x: 141.653, y: 197.0 };
  svgTPoint ={ x: 167.487, y: 197.0 };
  svgUPoint ={ x: 276.004, y: 0.0 };
  svgVPoint ={ x: 250.169, y: 0.0 };
}
