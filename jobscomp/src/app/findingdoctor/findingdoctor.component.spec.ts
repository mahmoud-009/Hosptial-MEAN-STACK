import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingdoctorComponent } from './findingdoctor.component';

describe('FindingdoctorComponent', () => {
  let component: FindingdoctorComponent;
  let fixture: ComponentFixture<FindingdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindingdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
