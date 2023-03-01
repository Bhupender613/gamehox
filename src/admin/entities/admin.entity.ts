import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;
@Schema({
    timestamps: true,
    versionKey: false
})
export class Admin {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop({ required: true, index: true, unique: true })
    @ApiProperty()
    email: string;

    @Prop()
    @ApiProperty()
    password: string;

    @Prop()
    @ApiProperty()
    phoneNumber: string;

    @Prop({ default: false })
    @ApiProperty()
    isDeleted: boolean;

    @Prop({ default: false })
    @ApiProperty()
    isBlocked: boolean;

    @Prop()
    accessToken: string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);