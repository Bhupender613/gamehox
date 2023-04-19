import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Document } from "mongoose";

export type HomeTagDocument = HomeTag & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class HomeTag {
  @Prop()
  @ApiProperty()
  tags: [];

  @Prop({ default: false })
  @ApiProperty()
  isDeleted: boolean;

  @Prop({ default: false })
  @ApiProperty()
  isBlocked: boolean;
}
export const HomeTagSchema = SchemaFactory.createForClass(HomeTag);
