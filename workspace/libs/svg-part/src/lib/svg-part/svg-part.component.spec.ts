import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPartComponent } from './svg-part.component';

describe('SvgPartComponent', () => {
  let component: SvgPartComponent;
  let fixture: ComponentFixture<SvgPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
