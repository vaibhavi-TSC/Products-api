import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()

export class Products extends Document {
    @Prop()
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    desc: string;
}


export const ProductSchema = SchemaFactory.createForClass(Products);