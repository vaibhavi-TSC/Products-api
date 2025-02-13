import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://vaibhavitsc:012345678@cluster0.rtzsl.mongodb.net/'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
