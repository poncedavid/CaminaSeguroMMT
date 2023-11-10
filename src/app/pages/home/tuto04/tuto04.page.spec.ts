import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuto04Page } from './tuto04.page';

describe('Tuto04Page', () => {
  let component: Tuto04Page;
  let fixture: ComponentFixture<Tuto04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tuto04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
