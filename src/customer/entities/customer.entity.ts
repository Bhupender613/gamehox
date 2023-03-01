import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../../users/entities/user.entity";



export type CustomerDocument= Customer & Document;

@Schema({
    timestamps: true,
    versionKey: false
})

export class Customer {
    @Prop()
    name:string

    @Prop()
    email: string

    @Prop()
    phoneNumber:string

    @Prop()
    remarks: string

    @Prop({ default: false })
    isDeleted: boolean;

    @Prop({ default: false })
    isBlocked: boolean;

}


export const CustomerSchema = SchemaFactory.createForClass(Customer);
