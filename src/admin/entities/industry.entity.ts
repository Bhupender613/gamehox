import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type IndustryDocument = Industry & Document;
@Schema({
    timestamps: true,
    versionKey: false
})
export class Industry {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    identificationAlphabet: string;
    
    @Prop({ default: false })
    @ApiProperty()
    isDeleted: boolean;

    @Prop({ default: false })
    @ApiProperty()
    isBlocked: boolean;

    
}
export const IndustrySchema = SchemaFactory.createForClass(Industry);