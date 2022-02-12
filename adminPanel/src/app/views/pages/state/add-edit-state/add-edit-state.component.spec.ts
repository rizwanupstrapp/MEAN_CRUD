import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStateComponent } from './add-edit-state.component';

describe('AddEditStateComponent', () => {
  let component: AddEditStateComponent;
  let fixture: ComponentFixture<AddEditStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
