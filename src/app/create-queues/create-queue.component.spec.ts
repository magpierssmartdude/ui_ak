import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from './add-service.component';

describe('AddUserComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
