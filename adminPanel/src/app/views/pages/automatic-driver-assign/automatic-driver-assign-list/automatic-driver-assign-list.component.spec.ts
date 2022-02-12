import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticDriverAssignListComponent } from './automatic-driver-assign-list.component';

describe('AutomaticDriverAssignListComponent', () => {
  let component: AutomaticDriverAssignListComponent;
  let fixture: ComponentFixture<AutomaticDriverAssignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticDriverAssignListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticDriverAssignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
