import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceLayoutComponent } from './data-source-layout.component';

describe('DataSourceLayoutComponent', () => {
  let component: DataSourceLayoutComponent;
  let fixture: ComponentFixture<DataSourceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSourceLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
