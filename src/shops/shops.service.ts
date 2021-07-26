import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from 'src/entity/Shop';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopsRepository: Repository<Shop>,
  ) {}

  findAll(): Promise<Shop[]> {
    return this.shopsRepository.find();
  }

  async add({ shop }): Promise<void> {
      console.log(shop);
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Shop)
      .values([
        {
          name: shop.name,
          description: shop.description,
          isActive: true,
          created_at:  new Date(Date.now()).toISOString(),
          updated_at:  new Date(Date.now()).toISOString(),
        },
      ])
      .execute();
  }
}
