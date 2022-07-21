import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDashboardLayoutComponent } from './add-dashboard-layout.component';

describe('AddDashboardLayoutComponent', () => {
  let component: AddDashboardLayoutComponent;
  let fixture: ComponentFixture<AddDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
