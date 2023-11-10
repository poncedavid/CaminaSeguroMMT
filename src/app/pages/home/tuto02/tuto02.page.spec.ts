import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuto02Page } from './tuto02.page';

describe('Tuto02Page', () => {
  let component: Tuto02Page;
  let fixture: ComponentFixture<Tuto02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tuto02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
