import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuto01Page } from './tuto01.page';

describe('Tuto01Page', () => {
  let component: Tuto01Page;
  let fixture: ComponentFixture<Tuto01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tuto01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
