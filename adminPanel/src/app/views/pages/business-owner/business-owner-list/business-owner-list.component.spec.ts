import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOwnerListComponent } from './business-owner-list.component';

describe('BusinessOwnerListComponent', () => {
  let component: BusinessOwnerListComponent;
  let fixture: ComponentFixture<BusinessOwnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessOwnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
