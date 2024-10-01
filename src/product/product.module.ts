import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductService } from './product.service';
import {Products, ProductSchema} from './schemas/product.schema'
import { ProductController } from './product.controller';
@Module({
    imports: [MongooseModule.forFeature([{name: Products.name, schema: ProductSchema}])],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}
