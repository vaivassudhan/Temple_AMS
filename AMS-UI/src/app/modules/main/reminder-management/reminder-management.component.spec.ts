import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderManagementComponent } from './reminder-management.component';

describe('ReminderManagementComponent', () => {
  let component: ReminderManagementComponent;
  let fixture: ComponentFixture<ReminderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
