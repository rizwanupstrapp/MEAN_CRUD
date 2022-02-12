import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBadgeComponent } from './add-edit-badge.component';

describe('AddEditBadgeComponent', () => {
  let component: AddEditBadgeComponent;
  let fixture: ComponentFixture<AddEditBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
