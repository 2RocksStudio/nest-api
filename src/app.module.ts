import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { User } from './schema/User';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [TypeOrmModule.forRoot({}), AuthModule, UsersModule, ShopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
