import { TestBed } from '@angular/core/testing';

import { GlobalEventEmitterService } from './global-event-emitter.service';

describe('GlobalEventEmitterService', () => {
  let service: GlobalEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
