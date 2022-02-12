import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticDriverAssignComponent } from './automatic-driver-assign.component';

describe('AutomaticDriverAssignComponent', () => {
  let component: AutomaticDriverAssignComponent;
  let fixture: ComponentFixture<AutomaticDriverAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticDriverAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticDriverAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
