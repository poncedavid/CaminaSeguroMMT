import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tuto03Page } from './tuto03.page';

describe('Tuto03Page', () => {
  let component: Tuto03Page;
  let fixture: ComponentFixture<Tuto03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tuto03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
