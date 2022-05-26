import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMPrintComponent } from './ngx-m-print.component';

describe('NgxMPrintComponent', () => {
  let component: NgxMPrintComponent;
  let fixture: ComponentFixture<NgxMPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
