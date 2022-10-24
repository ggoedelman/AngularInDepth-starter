import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltCustomerListPageComponent } from './alt-customer-list-page.component';

describe('AltCustomerListPageComponent', () => {
  let component: AltCustomerListPageComponent;
  let fixture: ComponentFixture<AltCustomerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltCustomerListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltCustomerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
