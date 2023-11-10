import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuto05Page } from './tuto05.page';

describe('Tuto05Page', () => {
  let component: Tuto05Page;
  let fixture: ComponentFixture<Tuto05Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tuto05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
