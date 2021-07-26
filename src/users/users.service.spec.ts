import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from 'src/entity/User';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User])],
      providers: [UsersService],
      exports: [UsersService, TypeOrmModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
