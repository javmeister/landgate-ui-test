import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurvedSectionSeparatorComponent } from './curved-section-separator.component';

describe('CurvedSectionSeparatorComponent', () => {
  let component: CurvedSectionSeparatorComponent;
  let fixture: ComponentFixture<CurvedSectionSeparatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvedSectionSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedSectionSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
