import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  //   private readonly users = [
  //     {
  //       id: 1,
  //       username: 'john',
  //       password: 'changeme',
  //       isActive: true,
  //     },
  //     {
  //       id: 2,
  //       username: 'maria',
  //       password: 'guess',
  //       isActive: true,
  //     },
  //   ];

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    console.log(username);
    return this.usersRepository.findOne({
      where: {
        username,
      },
    });
  }

  async add(): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          username: 'john',
          password: 'changeme',
          isActive: true,
        },
        {
          username: 'maria',
          password: 'guess',
          isActive: true,
        },
      ])
      .execute();
  }

  async remove(id: string): Promise<any> {
    await this.usersRepository.delete(id);
    return 'Done';
  }

  //   async findOne(username: string): Promise<User | undefined> {
  //     return this.users.find((user) => user.username === username);
  //   }
}
