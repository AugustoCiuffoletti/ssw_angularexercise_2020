import { TestBed } from '@angular/core/testing';

import { WeatherbitService } from './weatherbit.service';
import { HttpClientModule } from "@angular/common/http";

describe('WeatherbitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    }));

  it('should be created', () => {
    const service: WeatherbitService = TestBed.get(WeatherbitService);
    expect(service).toBeTruthy();
  });
});
