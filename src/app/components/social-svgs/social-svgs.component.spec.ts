import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialSvgsComponent } from './social-svgs.component';

describe('SocialSvgsComponent', () => {
  let component: SocialSvgsComponent;
  let fixture: ComponentFixture<SocialSvgsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSvgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
