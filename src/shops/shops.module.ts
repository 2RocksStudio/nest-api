import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from 'src/entity/Shop';
import { ShopsService } from './shops.service';

@Module({
    imports: [TypeOrmModule.forFeature([Shop])],
    providers: [ShopsService],
    exports: [ShopsService, TypeOrmModule],
})
export class ShopsModule {}
