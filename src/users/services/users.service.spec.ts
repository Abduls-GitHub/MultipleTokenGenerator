import { Test, TestingModule } from '@nestjs/testing';
import { meterService } from './meters.service';

describe('UsersService', () => {
  let service: meterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [meterService],
    }).compile();

    service = module.get<meterService>(meterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
