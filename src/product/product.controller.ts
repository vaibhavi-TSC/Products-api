
import { Body, Controller, Post, Get, Param , Delete, Patch} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import { Products } from './schemas/product.schema';

@Controller('product')
export class ProductController {
    constructor(private readonly ProductService: ProductService) {}

    @Post()
   async create(@Body() product: Products):Promise<Product> {
        const createProduct=await this.ProductService.create(product)
        return createProduct;
    }
      
    @Get() 
    findAll() {
        return this.ProductService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Product> {
        return this.ProductService.delete(id);
    }

    @Patch (':id')
    async update(@Param('id')id:string,  @Body() body: any): Promise<Product>{
        return this.ProductService.update(id,body);
    }
}
