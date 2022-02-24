import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'workspace-svg-part, [workspace-svg-part]',
  templateUrl: './svg-part.component.svg',
  styleUrls: ['./svg-part.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgPartComponent {

    @Input() sizeLogoRatio = 1;
	@Input() fillValueB = '#F92772';
	@Input() sPoint = { x: 141.653, y: 197.0 };
	@Input() tPoint = { x: 167.487, y: 197.0 };
	@Input() uPoint = { x: 276.004, y: 0.0 };
	@Input() vPoint = { x: 250.169, y: 0.0 };

	@Output() clicked = new EventEmitter<void>();

	emitClicked(_event: MouseEvent) {
		const configs: void = undefined;
		this.clicked.emit(configs);
	}
}
