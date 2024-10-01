// src/example/example.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './schemas/product.schema';

@Injectable()
export class ProductService {
  // update(id: string): import("./product.interface").Product | PromiseLike<import("./product.interface").Product> {
  //     throw new Error('Method not implemented.');
  // }
  constructor(@InjectModel(Products.name) private ProductsModel: Model<Products>) {}

  async create(product: Products): Promise<Products> {
    const createProduct = new this.ProductsModel(product);
    console.log('Product created successfully!')
    return createProduct.save();
    
  }

  async findAll(): Promise<Products[]> {
    console.log('Product found successfully!')
    return this.ProductsModel.find().exec();
  }

  async delete(id: string): Promise<Products>{
    console.log('Product deleted successfully!')
    const deletedProduct = await this.ProductsModel.findByIdAndDelete(id);

    // if(!deletedProduct){
    //   throw new NotFoundException(`Product with ID${id} not found`)
    // }

    return deletedProduct;
  }
  async update(id: string, body:any) : Promise<Products> {
    const UpdatedProduct = await this.ProductsModel.findByIdAndUpdate(id,body , {
      new:true
    });
    console.log('Product updated successfully!')
    return UpdatedProduct;
  }


}
