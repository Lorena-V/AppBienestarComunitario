import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoViewComponent } from './aviso-view.component';

describe('AvisoViewComponent', () => {
  let component: AvisoViewComponent;
  let fixture: ComponentFixture<AvisoViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
