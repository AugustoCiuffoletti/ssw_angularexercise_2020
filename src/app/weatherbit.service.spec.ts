import { TestBed } from '@angular/core/testing';

import { WeatherbitService } from './weatherbit.service';

describe('WeatherbitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherbitService = TestBed.get(WeatherbitService);
    expect(service).toBeTruthy();
  });
});
