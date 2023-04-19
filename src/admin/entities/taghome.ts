import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Document } from "mongoose";

export type TaghomeDocument = Taghome & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Taghome {
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
export const TaghomeSchema = SchemaFactory.createForClass(Taghome);
