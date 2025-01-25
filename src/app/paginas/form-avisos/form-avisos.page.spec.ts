import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAvisosPage } from './form-avisos.page';

describe('FormAvisosPage', () => {
  let component: FormAvisosPage;
  let fixture: ComponentFixture<FormAvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
