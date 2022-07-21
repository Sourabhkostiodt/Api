import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayoutsComponent } from './header-layouts.component';

describe('HeaderLayoutsComponent', () => {
  let component: HeaderLayoutsComponent;
  let fixture: ComponentFixture<HeaderLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
