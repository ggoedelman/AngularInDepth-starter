import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerMockService } from './customer-mock.service';
import { Customer } from './customer.model';

describe('CustomerMockService', () => {
  let service: CustomerMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be John', (done) => {
    service.get(1).subscribe({
      next: (cust: Customer) => {
        expect(cust.firstName).toEqual('John');
        done();
      }
    });
  });

  it('should be Smith', (done) => {
    service.get(1).subscribe({
      next: (cust: Customer) => {
        expect(cust.lastName).toEqual('Smith');
        done();
      }
    });
  });

  it('should be phone', (done) => {
    service.get(1).subscribe({
      next: (cust: Customer) => {
        expect(cust.preferredContactMethod).toEqual('phone');
        done();
      }
    });
  });

  it('should be Bob', (done) => {
    service.get(2).subscribe({
      next: (cust: Customer) => {
        expect(cust.firstName).toEqual('Bob');
        done();
      }
    });
  });

  it('should be Jones', (done) => {
    service.get(2).subscribe({
      next: (cust: Customer) => {
        expect(cust.lastName).toEqual('Jones');
        done();
      }
    });
  });

  it('should be email', (done) => {
    service.get(2).subscribe({
      next: (cust: Customer) => {
        expect(cust.preferredContactMethod).toEqual('email');
        done();
      }
    });
  });
});
